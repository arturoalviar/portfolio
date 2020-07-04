import React from 'react'

import { HamburgerButton, HamburgerLine } from '@styles/components/hamburger'

const Hamburger = ({ isMobileMenuVisible, toggleMobileMenu }) => {
  const currentClass = isMobileMenuVisible ? 'is-active' : ''

  function handleClick(event) {
    event.preventDefault()
    toggleMobileMenu()
  }

  return (
    <HamburgerButton
      className={currentClass}
      onClick={handleClick}
      aria-label={isMobileMenuVisible ? 'Close Menu' : 'Open Menu'}
    >
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerButton>
  )
}

export default Hamburger
