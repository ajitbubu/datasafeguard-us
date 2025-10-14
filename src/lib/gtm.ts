// Google Tag Manager helper functions

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push an event to Google Tag Manager dataLayer
 * @param event - Event name
 * @param data - Additional event data
 */
export const gtmPushEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
};

/**
 * Push a page view event to GTM
 * @param url - Page URL
 * @param title - Page title
 */
export const gtmPageView = (url: string, title?: string) => {
  gtmPushEvent("pageview", {
    page_path: url,
    page_title: title || document.title,
  });
};

/**
 * Push a custom event to GTM
 * @param eventName - Custom event name
 * @param eventCategory - Event category
 * @param eventLabel - Event label
 * @param eventValue - Event value
 */
export const gtmCustomEvent = (
  eventName: string,
  eventCategory?: string,
  eventLabel?: string,
  eventValue?: number
) => {
  gtmPushEvent(eventName, {
    event_category: eventCategory,
    event_label: eventLabel,
    event_value: eventValue,
  });
};

/**
 * Push an ecommerce event to GTM
 * @param event - Ecommerce event name (e.g., 'add_to_cart', 'purchase')
 * @param data - Ecommerce data
 */
export const gtmEcommerceEvent = (event: string, data: Record<string, any>) => {
  gtmPushEvent(event, {
    ecommerce: data,
  });
};

/**
 * Push user data to GTM
 * @param userId - User ID
 * @param userData - Additional user data
 */
export const gtmSetUser = (userId: string, userData?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      user_id: userId,
      ...userData,
    });
  }
};
