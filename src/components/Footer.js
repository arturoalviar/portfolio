import React from 'react'
import styled from 'styled-components'
import { ALink, Container, Social } from '@components'

const SiteFooter = styled.footer`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: ${props => props.theme.mixins.remCalc(50)} 0;
  ${props => props.theme.minMedia.lg`
    height: ${props.theme.mixins.remCalc(350)};
    padding: 0;
  `}
`

const FooterEmail = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  font-weight: 900;
  margin-bottom: 0;
  ${props => props.theme.minMedia.lg`
    font-size: ${props.theme.mixins.remCalc(36)};
  `}
`
const FooterBottom = styled.div`
  ul {
    margin-left: auto;
  }
  ${props => props.theme.minMedia.lg`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

const FooterContent = styled.div`
  margin-bottom: ${props => props.theme.gutter.grid};
  ${props => props.theme.minMedia.lg`
    margin-bottom: 0;
  `}
`

const Footer = () => (
  <SiteFooter>
    <Container>
      <FooterBottom>
        <FooterContent>
          <h5>Get in touch</h5>
          <FooterEmail>
            <ALink
              href="mailto:yo@arturoalviar.com"
              internal={false}
              variant="color"
            >
              yo@arturoalviar.com
            </ALink>
          </FooterEmail>
        </FooterContent>
        <Social />
      </FooterBottom>
    </Container>
  </SiteFooter>
)

export default Footer
