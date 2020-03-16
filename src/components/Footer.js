import React from 'react'
import { ALink, Container, Social } from '@components'

import {
  SiteFooter,
  FooterEmail,
  FooterBottom,
  FooterContent,
} from '@styles/components/footer'

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
