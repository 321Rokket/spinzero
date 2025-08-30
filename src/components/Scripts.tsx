'use client'

import { useEffect } from 'react'

export default function Scripts() {
  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
        document.body.appendChild(script)
      })
    }

    const loadScriptsSequentially = async () => {
      try {
        // Load jQuery first (required by all other scripts)
        await loadScript('/assets/vendors/jquery/jquery-3.6.0.min.js')
        
        // Load core libraries that others depend on
        await loadScript('/assets/vendors/bootstrap/js/bootstrap.bundle.min.js')
        await loadScript('/assets/vendors/gsap/gsap.js')
        await loadScript('/assets/vendors/gsap/ScrollTrigger.js')
        await loadScript('/assets/vendors/gsap/SplitText.js')
        
        // Load jQuery plugins (now that jQuery is available)
        const jqueryPlugins = [
          '/assets/vendors/bootstrap-select/js/bootstrap-select.min.js',
          '/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js',
          '/assets/vendors/jquery-appear/jquery.appear.min.js',
          '/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js',
          '/assets/vendors/jquery-ui/jquery-ui.js',
          '/assets/vendors/jquery-validate/jquery.validate.min.js',
          '/assets/vendors/nice-select/jquery.nice-select.min.js',
          '/assets/vendors/sidebar-content/jquery-sidebar-content.js',
        ]
        
        await Promise.all(jqueryPlugins.map(loadScript))
        
        // Load other libraries
        const otherLibs = [
          '/assets/vendors/isotope/isotope.js',
          '/assets/vendors/odometer/odometer.min.js',
          '/assets/vendors/owl-carousel/owl.carousel.min.js',
          '/assets/vendors/swiper/swiper.min.js',
          '/assets/vendors/wnumb/wNumb.min.js',
          '/assets/vendors/wow/wow.js',
          '/assets/vendors/jarallax/jarallax.min.js',
        ]
        
        await Promise.all(otherLibs.map(loadScript))
        
        // Load custom scripts last
        await loadScript('/assets/js/custom.js')
        
      } catch (error) {
        console.error('Failed to load scripts:', error)
      }
    }

    loadScriptsSequentially()
  }, [])

  return null
}