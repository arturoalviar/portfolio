import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Banner, Layout } from '@components'
import linkCss from '@styles/links'

const HomeLink = styled(Link)`
  ${linkCss}
  color: inherit;
  line-height: 1.2;
  &:hover {
    color: ${props => props.theme.colors.main};
    &:after {
      background-color: ${props => props.theme.colors.black};
    }
  }
`

const NotFoundPage = () => (
  <Layout hasFooter={false}>
    <Banner title="Oh no, a 404!" size="100vh" variant="color" hasTexture>
      <h4>
        It looks like I did not make this page or it simply does not exist. No
        worries, let&apos;s go <HomeLink to="/">back home.</HomeLink>
      </h4>
    </Banner>
  </Layout>
)

export default NotFoundPage
