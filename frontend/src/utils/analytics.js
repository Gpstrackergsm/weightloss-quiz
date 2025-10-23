function getGtag() {
  if (typeof window === 'undefined') {
    return null;
  }

  if (typeof window.gtag !== 'function') {
    if (import.meta.env.DEV) {
      console.warn('Google Analytics has not been loaded. Skipping event.');
    }
    return null;
  }

  return window.gtag;
}

export function trackEvent(eventName, params = {}) {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }

  gtag('event', eventName, params);
}

export function trackPageView(path) {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag('event', 'page_view', {
    page_path: path,
  });
}
