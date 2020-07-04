import React from 'react'
import { Link } from 'gatsby'
import { navItems } from 'config/vars'

import { Social } from '@components'

import {
  MobileNavWrapperVariants,
  MobileNavItemsVariants,
  MobileNavItemVariants,
  MobileSocialVariants,
  MobileNavWrapper,
  MobileNavItemsContainer,
  MobileNavItems,
  MobileNavItem,
  MobileSocial,
} from '@styles/components/mobileNav'

const MobileNav = ({ forwardRef, isMobileMenuVisible, toggleMobileMenu }) => {
  const handleClick = () => {
    toggleMobileMenu()
  }

  const renderMobileNavItems = (item, index) => {
    const { label, slug } = item
    return (
      <MobileNavItem
        variants={MobileNavItemVariants}
        key={`mobile-menu-item-${index}}`}
      >
        <Link to={`/${slug}`} onClick={handleClick}>
          {label}
        </Link>
      </MobileNavItem>
    )
  }
  return (
    <MobileNavWrapper
      ref={forwardRef}
      id="aa-mobile-nav"
      initial={false}
      animate={isMobileMenuVisible ? 'open' : 'closed'}
      variants={MobileNavWrapperVariants}
    >
      <MobileNavItemsContainer>
        <MobileNavItems variants={MobileNavItemsVariants}>
          {navItems.map(renderMobileNavItems)}
        </MobileNavItems>
      </MobileNavItemsContainer>
      <MobileSocial variants={MobileSocialVariants}>
        <Social />
      </MobileSocial>
    </MobileNavWrapper>
  )
}
export default MobileNav
