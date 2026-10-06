// src/analytics.ts
export const initGA = (measurementId: string) => {
  // Charger le script GA4
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialiser GA
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
};

// Fonction pour suivre les pages
export const trackPage = (page_path: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', { page_path });
  }
};

// Fonction pour suivre des événements personnalisés
export const trackEvent = (eventName: string, params: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};