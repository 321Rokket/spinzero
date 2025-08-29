'use client'

import { useEffect } from 'react'

export default function Scripts() {
  useEffect(() => {
    const scripts = [
      '/assets/vendors/jquery/jquery-3.6.0.min.js',
      '/assets/vendors/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/vendors/bootstrap-select/js/bootstrap-select.min.js',
      '/assets/vendors/isotope/isotope.js',
      '/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js',
      '/assets/vendors/jquery-appear/jquery.appear.min.js',
      '/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js',
      '/assets/vendors/jquery-ui/jquery-ui.js',
      '/assets/vendors/jquery-validate/jquery.validate.min.js',
      '/assets/vendors/nice-select/jquery.nice-select.min.js',
      '/assets/vendors/odometer/odometer.min.js',
      '/assets/vendors/owl-carousel/owl.carousel.min.js',
      '/assets/vendors/swiper/swiper.min.js',
      '/assets/vendors/wnumb/wNumb.min.js',
      '/assets/vendors/wow/wow.js',
      '/assets/vendors/jarallax/jarallax.min.js',
      '/assets/vendors/sidebar-content/jquery-sidebar-content.js',
      '/assets/vendors/gsap/gsap.js',
      '/assets/vendors/gsap/ScrollTrigger.js',
      '/assets/vendors/gsap/SplitText.js',
      '/assets/js/custom.js',
    ]

    const loadedScripts: HTMLScriptElement[] = []

    scripts.forEach((src) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
      loadedScripts.push(script)
    })

    return () => {
      loadedScripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  return null
}