import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { navItems } from 'config/vars'
import { MobileNav, Hamburger } from './'

const NavBar = styled.nav`
  position: relative;
  color: ${props => props.theme.colors.navColor};
`

const NavItems = styled.ul`
  display: none;
  ${props => props.theme.minMedia.md`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  `}
`

const NavItem = styled.li`
  font-size: ${props => props.theme.mixins.remCalc(15)};
  font-weight: ${props => (props.theme.mode === 'dark' ? 600 : 400)};
  text-transform: lowercase;
  letter-spacing: 0.13em;
  margin: 0 ${props => props.theme.mixins.remCalc(5)};
  padding: ${props => props.theme.mixins.remCalc(10)};
`

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
