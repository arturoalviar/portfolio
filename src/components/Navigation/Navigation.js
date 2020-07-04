import React from 'react'
import { Link } from 'gatsby'
import { navItems } from 'config/vars'

import { MobileNav, Hamburger } from './'

import { NavBar, NavItems, NavItem } from '@styles/components/navigation'

const renderNavItems = items => {
  const { label, slug } = items

  return (
    <NavItem key={`menu-item-${label}-${Date.now()}`}>
      <Link to={`/${slug}`} activeClassName="is-current-page">
        {label}
      </Link>
    </NavItem>
  )
}

const Navigation = ({ forwardRef, isMobileMenuVisible, toggleMobileMenu }) => (
  <NavBar>
    <NavItems>{navItems.map(renderNavItems)}</NavItems>
    <MobileNav
      forwardRef={forwardRef}
      isMobileMenuVisible={isMobileMenuVisible}
      toggleMobileMenu={toggleMobileMenu}
    />
    <Hamburger
      isMobileMenuVisible={isMobileMenuVisible}
      toggleMobileMenu={toggleMobileMenu}
    />
  </NavBar>
)

export default Navigation
