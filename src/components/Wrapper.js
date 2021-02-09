import React from 'react'
import { ThemeContext } from '@components'
import "@fontsource/mulish"
import "@fontsource/mulish/600.css"
import "@fontsource/mulish/700.css"
import "@fontsource/mulish/900.css"
import "@fontsource/playfair-display"
import "@fontsource/playfair-display/700.css"
import "@fontsource/playfair-display/900.css"

const Wrapper = ({ children, location }) => {
  return <ThemeContext location={location}>{children}</ThemeContext>
}

export default Wrapper
