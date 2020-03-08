import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import debounce from 'lodash.debounce'
import { Container } from '@components'
import { Navigation } from '@components/Navigation'

const HeaderWrapper = styled.header`
  background: transparent;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${props => props.theme.mixins.remCalc(100)};
  z-index: 10;
  &.is-fixed {
    position: fixed;
    z-index: 9009;
    .aa-logo a {
      color: ${props => props.theme.colors.lightHeadingText};
    }
  }
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const HeaderLogo = styled.div`
  color: ${props => props.theme.colors.navColor};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.mixins.remCalc(16)};
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: 0.13em;
  margin: 0;
  position: relative;
  z-index: 9009;
  a {
    color: ${props => props.theme.colors.navColor};
  }
`

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
