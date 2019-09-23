import { minMedia, maxMedia } from './breakpoints'
import colors, { globalColor, globalInverseColor } from './colors'
import mixins from './mixins'
import fonts from './typography'
import { gutter, spacing } from './units'

const theme = {
  mode: 'light',
  navMode: 'light',
  minMedia,
  maxMedia,
  colors,
  globalColor,
  globalInverseColor,
  fonts,
  gutter,
  mixins,
  spacing,
}

export default theme
