'use client'

import Link from 'next/link'

export default function MobileNav() {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="icon-plus"></i>
        </span>
        <div className="logo-box">
          <Link href="/" aria-label="logo image">
            <img src="/assets/images/resources/logo-1.png" alt="" />
          </Link>
        </div>
        <div className="mobile-nav__container"></div>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:123456789">444 000 777 66</a>
          </li>
        </ul>
        <div className="mobile-nav__social">
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-facebook-square"></a>
          <a href="#" className="fab fa-pinterest-p"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
      </div>
    </div>
  )
}