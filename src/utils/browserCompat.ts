/**
 * Browser Compatibility Utilities
 * Handles feature detection and graceful degradation for cross-browser support
 */

// Feature detection
export const browserFeatures = {
  backdropFilter: () => {
    const el = document.createElement('div');
    const styles = window.getComputedStyle(el);
    return (
      styles.backdropFilter !== undefined ||
      (el.style as any).webkitBackdropFilter !== undefined
    );
  },

  cssSupports: (property: string, value: string): boolean => {
    return CSS.supports(property, value);
  },

  touchDevice: (): boolean => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0
    );
  },

  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  darkMode: (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  isSafari: (): boolean => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },

  isFirefox: (): boolean => {
    return /firefox/i.test(navigator.userAgent);
  },

  isIOS: (): boolean => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  },

  isAndroid: (): boolean => {
    return /Android/.test(navigator.userAgent);
  },
};

// Apply fallbacks based on features
export const applyBrowserFallbacks = () => {
  // Disable animations if prefers-reduced-motion
  if (browserFeatures.prefersReducedMotion()) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
  }

  // Add data attributes for JS feature detection
  const html = document.documentElement;
  html.setAttribute('data-backdrop-filter', browserFeatures.backdropFilter() ? 'true' : 'false');
  html.setAttribute('data-touch-device', browserFeatures.touchDevice() ? 'true' : 'false');
  html.setAttribute('data-browser', getBrowserName());
};

// Detect browser name
export const getBrowserName = (): string => {
  if (browserFeatures.isSafari()) return 'safari';
  if (browserFeatures.isFirefox()) return 'firefox';
  if (/edg/i.test(navigator.userAgent)) return 'edge';
  if (/chrome/i.test(navigator.userAgent)) return 'chrome';
  return 'unknown';
};

// Check if device is small mobile (< 480px)
export const isSmallMobile = (): boolean => {
  return window.innerWidth < 480;
};

// Safe scroll behavior for mobile
export const safeScroll = (element: HTMLElement | null, behavior: ScrollBehavior = 'smooth') => {
  if (!element) return;
  
  // Some mobile browsers don't support smooth scrolling
  if (!CSS.supports('scroll-behavior', 'smooth')) {
    element.scrollIntoView(true);
  } else {
    element.scrollIntoView({ behavior, block: 'start' });
  }
};

// Detect viewport constraints (notches, safe areas)
export const getViewportConstraints = () => {
  const body = document.body;
  const html = document.documentElement;
  
  return {
    safeAreaInsetTop: getEnvVariable('safe-area-inset-top'),
    safeAreaInsetRight: getEnvVariable('safe-area-inset-right'),
    safeAreaInsetBottom: getEnvVariable('safe-area-inset-bottom'),
    safeAreaInsetLeft: getEnvVariable('safe-area-inset-left'),
  };
};

// Get CSS environment variable value
export const getEnvVariable = (varName: string): number => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`);
  return parseInt(value) || 0;
};

// Check if device has notch (iPhone X+, Android)
export const hasNotch = (): boolean => {
  return (
    CSS.supports('padding', 'max(0px)') &&
    (getViewportConstraints().safeAreaInsetTop > 0 ||
      getViewportConstraints().safeAreaInsetLeft > 0 ||
      getViewportConstraints().safeAreaInsetRight > 0)
  );
};
