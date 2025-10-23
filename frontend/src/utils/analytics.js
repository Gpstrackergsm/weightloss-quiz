const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-EP3PKS5BE0';

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

  if (!gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
}
