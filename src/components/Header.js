import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import debounce from 'lodash.debounce'

import { Navigation } from '@components/Navigation'

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
} from '@styles/components/header'

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
  const HeaderRef = useRef()
  const MobileNavRef = useRef()

  function toggleMobileMenu() {
    setIsMobileMenuVisible(!isMobileMenuVisible)
  }

  function handleLogoClick() {
    const hasFixedClass = HeaderRef.current.classList.contains('is-fixed')
    if (hasFixedClass) {
      setIsMobileMenuVisible(false)
    }
  }

  function resetStateOnResize() {
    const isMobileMenuHidden =
      window.getComputedStyle(MobileNavRef.current).display === 'none'
    if (isMobileMenuHidden) {
      setIsMobileMenuVisible(false)
    }
  }

  useEffect(() => {
    const handleResize = debounce(resetStateOnResize, 150)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <HeaderWrapper
      ref={HeaderRef}
      className={isMobileMenuVisible ? 'is-fixed' : ''}
    >
      <HeaderContainer>
        <HeaderLogo className="aa-logo">
          <Link onClick={handleLogoClick} to="/">
            arturoalviar
          </Link>
        </HeaderLogo>
        <Navigation
          forwardRef={MobileNavRef}
          isMobileMenuVisible={isMobileMenuVisible}
          toggleMobileMenu={toggleMobileMenu}
        />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
