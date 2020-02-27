import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Social } from '@components'
import { navItems } from 'config/vars'

const MobileNavWrapperVariants = {
  open: {
    opacity: 1,
    x: '0%',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      mass: 0.5,
    },
  },
}

const MobileNavItemsVariants = {
  open: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: -1,
    },
  },
}

const MobileNavItemVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 100,
  },
}

const MobileSocialVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
  closed: {
    opacity: 0,
    y: 100,
  },
}

const MobileNavWrapper = styled(motion.div)`
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

const MobileNavItems = styled(motion.ul)`
  padding: 0;
  margin: 0;
`

const MobileNavItem = styled(motion.li)`
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

const MobileSocial = styled(motion.div)`
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
