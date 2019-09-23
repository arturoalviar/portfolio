import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { SEO, Footer } from '@components'
import theme from '@styles/theme.js'

const Layout = ({ children, hasFooter }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        {children}
        {hasFooter && <Footer />}
      </>
    </ThemeProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
  hasFooter: PropTypes.bool,
}
Layout.defaultProps = {
  theme: theme,
  hasFooter: true,
}

export default Layout
