import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { remCalc } from '@styles/mixins'
import { bgs } from '@styles/colors'

const bannerBg = theme.variants('mode', 'variant', bgs)

const wrapper = css`
  ${bannerBg}
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size};
  padding-top: ${props => remCalc((props.spacing * 1.5) / 2)};
  padding-bottom: ${props => remCalc(props.spacing / 3)};
  ${props => props.theme.minMedia.md`
    padding-top: ${remCalc(props.spacing + 100)};
    padding-bottom: ${remCalc(props.spacing)};
  `}
`

const heading = css`
  color: inherit;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${remCalc(48)};
  font-weight: bold;
  line-height: 1;
  position: relative;
  margin-bottom: 0.15em;
  ${props => props.theme.minMedia.md`
    font-size: ${remCalc(64)};
  `}
  ${props => props.theme.minMedia.lg`
    font-size: ${remCalc(80)};
  `}
`

const content = css`
  max-width: 820px;
  h4 {
    font-weight: 400;
    margin-bottom: 0.5em;
  }
`

const BannerWrapper = styled.div`
  ${wrapper}
`

const BannerHeading = styled.h1`
  ${heading}
`

const BannerContent = styled.div`
  ${content}
`

export { BannerWrapper, BannerHeading, BannerContent }
