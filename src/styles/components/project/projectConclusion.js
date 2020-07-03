import styled from 'styled-components'

import { Container } from '@components'

const ImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  position: relative;
  ${props => props.theme.minMedia.md`
      box-shadow: 0 22px 44px rgba(0, 0, 0, 0.12);
  `}
`

const ImageContainer = styled(Container)`
  padding-bottom: ${props => props.theme.spacing.section.sm};
  ${props => props.theme.minMedia.sm`
    padding-bottom: ${props.theme.spacing.section.lg};
  `}
  ${props => props.theme.minMedia.lg`
    padding-bottom: ${props.theme.spacing.section.xl};
  `}
`

const EndLinks = styled.div`
  display: flex;
  flex-flow: column;
  padding-left: ${props => props.theme.gutter.grid};
  padding-right: ${props => props.theme.gutter.grid};
`

export { ImageWrapper, ImageContainer, EndLinks }
