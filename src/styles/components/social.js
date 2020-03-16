import styled from 'styled-components'
import { smallText } from '@styles/typography'

const SocialItems = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const SocialItem = styled.li`
  display: inline-block;
  margin-bottom: 0;
  ${smallText}
`

const SocialLink = styled.a`
  padding: ${props => props.theme.mixins.remCalc(5)}
    ${props => props.theme.mixins.remCalc(12)};
  svg {
    fill: ${props => props.theme.colors.main};
    transition: fill 0.3s ease-in-out;
  }
  &:hover {
    svg {
      fill: ${props => props.theme.mixins.remCalc(56)};
    }
  }
`

export { SocialItems, SocialItem, SocialLink }
