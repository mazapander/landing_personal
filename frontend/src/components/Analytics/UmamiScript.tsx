export default function UmamiScript() {
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID

  if (!websiteId) return null

  return (
    <script
      defer
      src="https://analytics.anderdata.es/script.js"
      data-website-id={websiteId}
    />
  )
}