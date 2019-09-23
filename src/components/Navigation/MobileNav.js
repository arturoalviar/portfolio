import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import posed from 'react-pose'
import { Social } from '@components'
import { navItems } from 'config/vars'

const PoseMobileNavWrapper = posed.div({
  open: {
    opacity: 1,
    x: '0%',
    staggerChildren: 300,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
  closed: {
    opacity: 0.25,
    x: '-100%',
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 40,
    },
  },
})

const MobileNavWrapper = styled(PoseMobileNavWrapper)`
  background: ${props => props.theme.colors.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  opacity: 0;
  z-index: 1000;
  ${props => props.theme.minMedia.lg`
    display: none;
  `}
`

const MobileNavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - ${props => props.theme.mixins.remCalc(80)});
  margin-bottom: ${props => props.theme.mixins.remCalc(80)};
`

const PoseMobileNavItems = posed.ul({
  open: { staggerChildren: 150 },
})

const MobileNavItems = styled(PoseMobileNavItems)`
  padding: 0;
  margin: 0;
`

const PoseNavItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 },
})

const MobileNavItem = styled(PoseNavItem)`
  color: ${props => props.theme.colors.white};
  display: block;
  font-size: ${props => props.theme.mixins.remCalc(24)};
  font-weight: 600;
  text-transform: lowercase;
  letter-spacing: 0.13em;
  margin: 0 ${props => props.theme.mixins.remCalc(5)};
  a {
    color: currentColor;
    display: block;
    padding: ${props => props.theme.mixins.remCalc(10)};
  }
`

const PoseMobileSocial = posed.div({
  open: { opacity: 1 },
  closed: { opacity: 0 },
})

const MobileSocial = styled(PoseMobileSocial)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.mixins.remCalc(80)};
  h4 {
    color: ${props => props.theme.colors.white};
  }
`

const MobileNav = ({ forwardRef, isMobileMenuVisible, toggleMobileMenu }) => {
  const handleClick = () => {
    toggleMobileMenu()
  }

  const renderMobileNavItems = (item, index) => {
    const { label, slug } = item
    return (
      <MobileNavItem key={`mobile-menu-item-${index}}`}>
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
      pose={isMobileMenuVisible ? 'open' : 'closed'}
    >
      <MobileNavItemsContainer>
        <MobileNavItems>{navItems.map(renderMobileNavItems)}</MobileNavItems>
      </MobileNavItemsContainer>
      <MobileSocial>
        <Social />
      </MobileSocial>
    </MobileNavWrapper>
  )
}
export default MobileNav
