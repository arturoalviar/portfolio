import { remCalc } from '@styles/mixins'

const gutter = {
  container: remCalc(30),
  grid: remCalc(30),
}

const spacing = {
  banner: {
    sm: remCalc(100),
    md: remCalc(250),
    lg: remCalc(350),
  },
  section: {
    sm: remCalc(30),
    md: remCalc(50),
    lg: remCalc(80),
    xl: remCalc(140),
  },
}

export { gutter, spacing }
