import styled from 'styled-components'
import { Container } from '@components'

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

export { HeaderWrapper, HeaderContainer, HeaderLogo }
