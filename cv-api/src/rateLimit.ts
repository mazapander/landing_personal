type Bucket = {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

export function allowRequest(key: string, windowMs: number, maxRequests: number) {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: Math.max(0, maxRequests - 1), resetAt: now + windowMs }
  }

  if (bucket.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetAt: bucket.resetAt }
  }

  bucket.count += 1
  buckets.set(key, bucket)
  return { allowed: true, remaining: Math.max(0, maxRequests - bucket.count), resetAt: bucket.resetAt }
}

export function cleanupRateLimitBuckets() {
  const now = Date.now()
  for (const [key, bucket] of buckets.entries()) {
    if (bucket.resetAt <= now) {
      buckets.delete(key)
    }
  }
}
