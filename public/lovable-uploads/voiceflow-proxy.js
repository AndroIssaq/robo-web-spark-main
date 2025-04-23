// Focused anti-branding script that only targets Voiceflow branding while preserving widget functionality

(function() {
  console.log('[Anti-Branding] Loading targeted approach to remove only branding');
  
  // Load our CSS for targeted removal
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = '/anti-branding.css';
  document.head.appendChild(linkElement);
  
  // Simple function to specifically target just branding elements
  function removeBranding() {
    // Very specific targeting of only footer/branding elements
    const brandingSelectors = [
      // Direct targeting of Voiceflow branding
      '[data-testid="vf-footer"]',
      'div.vf-footer',
      '[class*="FooterBranding"]',
      '[class*="PoweredBy"]',
      'a[href*="voiceflow.com"]',
      // Target only footer at bottom of widget
      'div[id^="voiceflow-chat"] div[role="contentinfo"]',
      'div[class*="chat"] > div:last-child:not([class*="messages"]):not([class*="input"]):not([class*="content"])'
    ];
    
    brandingSelectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el) {
            // Hide the element first
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.height = '0';
            el.style.maxHeight = '0';
            el.style.overflow = 'hidden';
            el.style.padding = '0';
            el.style.margin = '0';
            
            // If safe to remove, do so
            // Only if we're confident this is a branding element
            if (
              (el.hasAttribute('data-testid') && el.getAttribute('data-testid') === 'vf-footer') ||
              (el.className && (
                el.className.includes('footer') || 
                el.className.includes('Footer') || 
                el.className.includes('powered') || 
                el.className.includes('Powered') ||
                el.className.includes('branding') ||
                el.className.includes('Branding')
              )) ||
              (el.tagName === 'A' && el.href && el.href.includes('voiceflow.com'))
            ) {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
            }
          }
        });
      } catch(e) { /* Silent fail */ }
    });
    
    // Check inside iframes too, but only target specific branding elements
    document.querySelectorAll('iframe').forEach(iframe => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
          // Add our CSS to the iframe
          if (!iframeDoc.getElementById('anti-branding-css')) {
            const style = iframeDoc.createElement('style');
            style.id = 'anti-branding-css';
            style.textContent = `
              [data-testid="vf-footer"],
              div.vf-footer,
              div[class*="FooterBranding"],
              div[class*="PoweredBy"],
              a[href*="voiceflow.com"] {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                opacity: 0 !important;
              }
            `;
            iframeDoc.head.appendChild(style);
          }
          
          // Target only specific elements in iframe
          brandingSelectors.forEach(selector => {
            try {
              iframeDoc.querySelectorAll(selector).forEach(el => {
                if (el && el.parentNode) {
                  el.style.display = 'none';
                  el.style.height = '0';
                  el.parentNode.removeChild(el);
                }
              });
            } catch(e) { /* Silent fail */ }
          });
        }
      } catch(e) { /* Silent fail - likely cross-origin restriction */ }
    });
  }

  // Hook into Voiceflow API
  function initVoiceflow() {
    // Check if Voiceflow is loaded
    if (window.voiceflow && window.voiceflow.chat) {
      console.log('[Anti-Branding] Voiceflow detected - hooking into API');
      
      // Store original load function
      const originalLoad = window.voiceflow.chat.load;
      
      // Override with our custom version
      window.voiceflow.chat.load = function(config) {
        console.log('[Anti-Branding] Intercepting chat load');
        
        // Use original config but try to add branding removal options
        const enhancedConfig = {
          ...config, // Preserve original config
          verify: { projectID: '68060269b55d846dc89272b5' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          },
          // Add branding hide option if supported by API
          hideVoiceflowBranding: true
        };
        
        // Call original load with enhanced config
        originalLoad(enhancedConfig);
        
        // Set up targeted branding removal
        setTimeout(removeBranding, 500); // Initial removal
        setTimeout(removeBranding, 1000); // Second attempt
        
        // Set up observer for dynamic content
        const observer = new MutationObserver(function() {
          removeBranding();
        });
        
        // Observe changes to catch dynamically added branding
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      };
      
      // Clean up any branding if already loaded
      removeBranding();
      return true;
    }
    return false;
  }
  
  // Wait for Voiceflow to load
  if (!initVoiceflow()) {
    const checkInterval = setInterval(function() {
      if (initVoiceflow()) {
        clearInterval(checkInterval);
      }
    }, 200);
  }
  
  // Load the original Voiceflow script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
  document.head.appendChild(script);
  
  // Periodic cleanup to ensure branding stays removed
  setInterval(removeBranding, 1000);
  
  // Handle page load event
  document.addEventListener('DOMContentLoaded', function() {
    removeBranding();
    setTimeout(removeBranding, 1000);
  });
})();
