const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let isInitialized = false;

function injectAnalyticsScript(id) {
  if (document.getElementById('ga-measurement')) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.id = 'ga-measurement';
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (typeof window === 'undefined' || isInitialized) {
    return;
  }

  if (!GA_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.warn('Google Analytics measurement ID is not defined.');
    }
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  injectAnalyticsScript(GA_MEASUREMENT_ID);

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

  isInitialized = true;
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag !== 'function') {
    if (import.meta.env.DEV) {
      console.warn('gtag is not available. Event skipped:', eventName, params);
    }
    return;
  }

  window.gtag('event', eventName, params);
}

export function trackPageView(path) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    send_to: GA_MEASUREMENT_ID
  });
}
