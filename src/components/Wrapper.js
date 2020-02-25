import React from 'react'
import { ThemeContext } from '@components'
import 'typeface-muli'
import 'typeface-playfair-display'

const Wrapper = ({ children, location }) => {
  return <ThemeContext location={location}>{children}</ThemeContext>
}

export default Wrapper
