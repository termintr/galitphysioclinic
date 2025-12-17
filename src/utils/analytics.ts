// Google Analytics configuration and helper functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Replace this with your actual Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-0QJ8TYQPMV'

// Track if analytics has been initialized
let analyticsEnabled = false

// Load Google Analytics script dynamically
export const loadGoogleAnalytics = (): Promise<void> => {
  return new Promise((resolve) => {
    if (analyticsEnabled) {
      resolve()
      return
    }

    // Create and load the GA script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.async = true
    script.onload = () => {
      // Initialize GA
      window.gtag('js', new Date())
      window.gtag('config', GA_MEASUREMENT_ID)
      analyticsEnabled = true
      resolve()
    }
    document.head.appendChild(script)
  })
}

// Check if analytics is enabled
export const isAnalyticsEnabled = () => analyticsEnabled

// Event categories for better organization
export const EVENT_CATEGORIES = {
  NAVIGATION: 'navigation',
  CONTACT: 'contact',
  CONTENT: 'content',
  FORM: 'form',
  SOCIAL: 'social',
  EXTERNAL_LINK: 'external_link'
} as const

// Event actions for meaningful naming in Google Analytics dashboard
export const EVENT_ACTIONS = {
  // Navigation
  PAGE_VIEW: 'page_view',
  MENU_NAVIGATION: 'menu_navigation',
  
  // Contact Actions
  PHONE_CALL_INITIATED: 'phone_call_initiated',
  WHATSAPP_MESSAGE_INITIATED: 'whatsapp_message_initiated',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  
  // Content Interactions
  TESTIMONIAL_CAROUSEL_NAVIGATED: 'testimonial_carousel_navigated',
  SERVICE_SECTION_EXPANDED: 'service_section_expanded',
  SERVICE_SECTION_COLLAPSED: 'service_section_collapsed',
  FAQ_ITEM_EXPANDED: 'faq_item_expanded',
  FAQ_ITEM_COLLAPSED: 'faq_item_collapsed',
  PDF_DOWNLOADED: 'pdf_downloaded',
  
  // External Actions
  EXTERNAL_LINK_CLICKED: 'external_link_clicked',
  SOCIAL_MEDIA_LINK_CLICKED: 'social_media_link_clicked',
  NAVIGATION_APP_OPENED: 'navigation_app_opened',
  
  // Form Actions
  FORM_COMPLETED: 'form_completed',
  FORM_VALIDATION_ERROR: 'form_validation_error'
} as const

// Track page views
export const trackPageView = (path: string) => {
  if (!analyticsEnabled) return
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path
    })
  }
}

// Generic event tracking function
export const trackEvent = (
  action: string, 
  category: string, 
  label?: string, 
  value?: number,
  customParameters?: Record<string, any>
) => {
  if (!analyticsEnabled) return
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    const eventData: any = {
      event_category: category,
      event_label: label,
      value: value
    }
    
    // Add custom parameters if provided
    if (customParameters) {
      Object.assign(eventData, customParameters)
    }
    
    window.gtag('event', action, eventData)
  }
}

// Navigation tracking
export const trackNavigation = {
  menuClick: (menuItem: string, location: string = 'hamburger_menu') => {
    trackEvent(EVENT_ACTIONS.MENU_NAVIGATION, EVENT_CATEGORIES.NAVIGATION, menuItem, undefined, {
      menu_location: location,
      page_url: window.location.href
    })
  }
}

// Content interaction tracking
export const trackContent = {
  testimonialCarouselNavigate: (direction: 'prev' | 'next', page: string) => {
    trackEvent(EVENT_ACTIONS.TESTIMONIAL_CAROUSEL_NAVIGATED, EVENT_CATEGORIES.CONTENT, direction, undefined, {
      direction: direction,
      page: page
    })
  },
  
  serviceSectionExpand: (sectionName: string, page: string) => {
    trackEvent(EVENT_ACTIONS.SERVICE_SECTION_EXPANDED, EVENT_CATEGORIES.CONTENT, sectionName, undefined, {
      page: page
    })
  },
  
  serviceSectionCollapse: (sectionName: string, page: string) => {
    trackEvent(EVENT_ACTIONS.SERVICE_SECTION_COLLAPSED, EVENT_CATEGORIES.CONTENT, sectionName, undefined, {
      page: page
    })
  },
  
  faqItemExpand: (faqId: string, page: string) => {
    trackEvent(EVENT_ACTIONS.FAQ_ITEM_EXPANDED, EVENT_CATEGORIES.CONTENT, faqId, undefined, {
      page: page
    })
  },
  
  faqItemCollapse: (faqId: string, page: string) => {
    trackEvent(EVENT_ACTIONS.FAQ_ITEM_COLLAPSED, EVENT_CATEGORIES.CONTENT, faqId, undefined, {
      page: page
    })
  },
  
  pdfDownload: (fileName: string, page: string) => {
    trackEvent(EVENT_ACTIONS.PDF_DOWNLOADED, EVENT_CATEGORIES.CONTENT, fileName, undefined, {
      page: page
    })
  }
}

// Contact tracking
export const trackContact = {
  phoneCall: (location: string, phoneNumber?: string) => {
    trackEvent(EVENT_ACTIONS.PHONE_CALL_INITIATED, EVENT_CATEGORIES.CONTACT, location, undefined, {
      phone_number: phoneNumber || '+972526598076',
      page_url: window.location.href
    })
  },
  
  whatsappClick: (location: string, phoneNumber?: string) => {
    trackEvent(EVENT_ACTIONS.WHATSAPP_MESSAGE_INITIATED, EVENT_CATEGORIES.CONTACT, location, undefined, {
      phone_number: phoneNumber || '+972526598076',
      page_url: window.location.href
    })
  }
}

// External link tracking
export const trackExternalLink = {
  linkClick: (linkText: string, url: string, location: string) => {
    trackEvent(EVENT_ACTIONS.EXTERNAL_LINK_CLICKED, EVENT_CATEGORIES.EXTERNAL_LINK, linkText, undefined, {
      link_url: url,
      link_location: location,
      page_url: window.location.href
    })
  },
  
  socialMediaClick: (platform: string, location: string) => {
    trackEvent(EVENT_ACTIONS.SOCIAL_MEDIA_LINK_CLICKED, EVENT_CATEGORIES.SOCIAL, platform, undefined, {
      platform: platform,
      location: location,
      page_url: window.location.href
    })
  },
  
  wazeNavigation: (location: string) => {
    trackEvent(EVENT_ACTIONS.NAVIGATION_APP_OPENED, EVENT_CATEGORIES.EXTERNAL_LINK, location, undefined, {
      navigation_app: 'waze',
      page_url: window.location.href
    })
  }
}

// Form tracking
export const trackForm = {
  formComplete: (formName: string, page: string) => {
    trackEvent(EVENT_ACTIONS.FORM_COMPLETED, EVENT_CATEGORIES.FORM, formName, undefined, {
      page: page
    })
  },
  
  formError: (formName: string, errorType: string, page: string) => {
    trackEvent(EVENT_ACTIONS.FORM_VALIDATION_ERROR, EVENT_CATEGORIES.FORM, formName, undefined, {
      error_type: errorType,
      page: page
    })
  }
}

// Automatic tracking utilities
export const autoTrack = {
  // Automatically track all external links
  externalLinks: () => {
    if (typeof window === 'undefined') return
    
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && link.hostname !== window.location.hostname) {
        trackExternalLink.linkClick(
          link.textContent?.trim() || 'External Link',
          link.href,
          target.closest('[data-track-location]')?.getAttribute('data-track-location') || 'unknown'
        )
      }
    })
  },
  
  // Automatically track form interactions
  forms: () => {
    if (typeof window === 'undefined') return
    
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement
      const formName = form.getAttribute('data-form-name') || form.id || 'unknown_form'
      const page = window.location.pathname
      
      trackForm.formComplete(formName, page)
    })
  }
} 