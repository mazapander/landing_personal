export default function UmamiScript() {
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID

  if (!websiteId) return null

  return (
    <script defer src="https://u.anderdata.es/script.js" 
      data-website-id="4122aa5e-073c-4251-ac0f-fe2d65270d02">

    </script>
  )
}