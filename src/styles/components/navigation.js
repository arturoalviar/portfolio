import styled from 'styled-components'

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

export { NavBar, NavItems, NavItem }
