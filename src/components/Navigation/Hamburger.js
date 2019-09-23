import React from 'react'
import styled from 'styled-components'
import hamburger from '@styles/components/hamburger'

const { hamburgerButtonStyles, hamburgerLineStyles } = hamburger

const HamburgerButton = styled.button`
  ${hamburgerButtonStyles}
`

const HamburgerLine = styled.div`
  ${hamburgerLineStyles}
`

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
