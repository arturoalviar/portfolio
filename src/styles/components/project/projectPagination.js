import styled from 'styled-components'
import { Link } from 'gatsby'
import { smallText } from '@styles/typography'

const PaginationWrapper = styled.div`
  background: ${props => props.theme.colors.black};
  ${props => props.theme.minMedia.lg`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    height: ${props.theme.mixins.remCalc(400)};
  `}
`

const PaginationItem = styled(Link)`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.lightText};
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  padding-top: ${props => props.theme.mixins.remCalc(50)};
  padding-bottom: ${props => props.theme.mixins.remCalc(50)};
  position: relative;
  transition: all 0.3s ease;
  ${props => props.theme.minMedia.lg`
    &:first-of-type {
      &:before {
        background: ${props.theme.globalColor};
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: ${props => props.theme.mixins.remCalc(50)};
        z-index: 10;
      }
    }
    `}
  &:hover {
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.globalInverseColor};
    p {
      color: ${props => props.theme.colors.black};
    }
  }
  h3 {
    text-align: center;
  }
`

const PaginationSubHeading = styled.p`
  ${smallText}
  color: ${props => props.theme.colors.main};
  margin-bottom: ${props => props.theme.mixins.remCalc(20)};
`

export { PaginationWrapper, PaginationItem, PaginationSubHeading }
