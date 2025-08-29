'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MenuItem } from '@/lib/yaml-loader'

interface NavigationProps {
  menuItems: MenuItem[]
}

export default function Navigation({ menuItems }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const renderMenuItem = (item: MenuItem, isChild = false) => {
    const hasChildren = item.children && item.children.length > 0
    const itemClass = hasChildren ? 'dropdown' : ''
    const isActive = item.id === 'home' // You can make this dynamic based on current page

    return (
      <li key={item.id} className={`${itemClass} ${isActive ? 'current' : ''}`}>
        {item.path ? (
          <Link href={item.path}>{item.label}</Link>
        ) : (
          <a href="#">{item.label}</a>
        )}
        {hasChildren && (
          <ul>
            {item.children!.map((child) => renderMenuItem(child, true))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <nav className="main-menu main-menu-one">
      <div className="main-menu__wrapper clearfix">
        <div className="auto-container">
          <div className="main-menu__wrapper-inner">
            <div className="main-menu-box">
              <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>

              <ul className="main-menu__list">
                {menuItems.map((item) => renderMenuItem(item))}
              </ul>
            </div>

            <div className="main-header-one__middle">
              <div className="logo-box-one">
                <Link href="/">
                  <img src="/assets/images/resources/logo-1.png" alt="SpinZero Logo" title="" />
                </Link>
              </div>
            </div>

            <div className="main-header-one__right">
              <ul className="Reg-login-box">
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </ul>

              <div className="header-search-box">
                <a href="#" className="main-menu__search search-toggler icon-search-interface-symbol"></a>
              </div>

              <div className="header-cart-box">
                <Link href="/cart">
                  <i className="icon-bag"></i>
                  <span className="count">3</span>
                </Link>
              </div>

              <div className="side-content-button-box">
                <div className="side-content-button">
                  <a className="navSidebar-button" href="#">
                    <span className="icon-menu"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}