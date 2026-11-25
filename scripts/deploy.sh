#!/usr/bin/env bash
# AnderData: despliegue manual, desde cualquier directorio.
# Uso: bash scripts/deploy.sh [--no-cache]
set -Eeuo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

log() { printf '\n[deploy] %s\n' "$*"; }
fail() { printf '[deploy] ERROR: %s\n' "$*" >&2; exit 1; }
trap 'printf "[deploy] Fallo en la línea %s. No se ha confirmado el despliegue.\n" "$LINENO" >&2' ERR

case "${1:-}" in
  "") NO_CACHE=0 ;;
  --no-cache) NO_CACHE=1 ;;
  *) fail "Uso: bash scripts/deploy.sh [--no-cache]" ;;
esac
[[ $# -le 1 ]] || fail "Demasiados argumentos"

for cmd in git docker; do command -v "$cmd" >/dev/null || fail "Falta $cmd"; done
docker compose version >/dev/null 2>&1 || fail "Docker Compose v2 no disponible"

[[ "$(git rev-parse --show-toplevel)" == "$ROOT" ]] || fail "Directorio Git inesperado"
[[ "$(git branch --show-current)" == master ]] || fail "Debes ejecutar en la rama master"
[[ -z "$(git status --porcelain --untracked-files=no)" ]] || fail "Hay cambios locales en archivos versionados. Guárdalos antes de desplegar"
git remote get-url origin >/dev/null || fail "No existe remote origin"

log "Consultando cambios de origin/master..."
git fetch --prune origin master
LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse origin/master)"
if [[ "$LOCAL" == "$REMOTE" ]]; then
  log "master ya está actualizado: ${LOCAL:0:12}"
else
  git merge-base --is-ancestor HEAD origin/master || fail "master local ha divergido: resolver manualmente antes del despliegue"
  log "Nuevos commits: $(git rev-list --count HEAD..origin/master)"
  git pull --ff-only origin master
fi

log "Validando Docker Compose y el contexto de build..."
docker compose config --quiet
[[ -f frontend/Dockerfile ]] || fail "No existe frontend/Dockerfile"
[[ -f frontend/package.json ]] || fail "No existe frontend/package.json"

log "Construyendo imagen nueva (la imagen anterior sigue en servicio)..."
if [[ "$NO_CACHE" == 1 ]]; then
  docker compose build --no-cache anderdata-landing
else
  docker compose build anderdata-landing
fi

log "Aplicando contenedor con la imagen validada por el build..."
docker compose up -d --no-build --force-recreate anderdata-landing
docker compose ps anderdata-landing

log "Comprobando respuesta HTTP local en puerto 4321..."
if command -v curl >/dev/null 2>&1; then
  READY=0
  for i in 1 2 3 4 5 6 7 8 9 10; do
    if curl --fail --silent --show-error --output /dev/null --max-time 3 http://127.0.0.1:4321/ 2>/dev/null; then READY=1; break; fi
    sleep 2
  done
  [[ "$READY" == 1 ]] || fail "Contenedor desplegado, pero sin HTTP 2xx local. Revisa: docker compose logs --tail=100 anderdata-landing"
else
  log "curl no disponible: omitiendo prueba HTTP"
fi

log "Despliegue finalizado. Commit: $(git rev-parse --short=12 HEAD)"
log "Comprueba también https://anderdata.es (posible caché de Cloudflare/navegador)."
