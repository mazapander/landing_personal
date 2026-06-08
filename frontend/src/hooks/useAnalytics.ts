declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void
    }
  }
}

export function useAnalytics() {
  const trackEvent = (
    eventName: string,
    eventData?: Record<string, unknown>
  ) => {
    if (window.umami) {
      window.umami.track(eventName, eventData)
    }
  }

  return { trackEvent }
}