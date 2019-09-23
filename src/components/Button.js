import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { Link } from 'gatsby'
import button, { iconCss } from '@styles/components/button'
import Icon from '@components/Icon'

const { defaultStyles } = button
const primaryStyles = theme.variants('mode', 'variant', button.primary)
const ghostStyles = theme.variants('mode', 'variant', button.ghost)

const buttonSolidCss = css`
  ${defaultStyles}
  ${primaryStyles}
`

const buttonGhostCss = css`
  ${defaultStyles}
  ${ghostStyles}
`

const renderIcon = (hasIcon, icon) => {
  if (hasIcon) {
    return <Icon name={icon} />
  }
}

const Button = ({
  to,
  children,
  variant,
  type,
  icon,
  hasIcon,
  linksOut,
  isEmail,
}) => {
  let ButtonSolid, ButtonGhost

  // use regular a tags if link is external else use gatsby link
  if (linksOut || isEmail) {
    ButtonSolid = styled.a`
      ${buttonSolidCss}
    `
    ButtonGhost = styled.a`
      ${buttonGhostCss}
    `
  } else {
    ButtonSolid = styled(Link)`
      ${buttonSolidCss}
    `
    ButtonGhost = styled(Link)`
      ${buttonGhostCss}
    `
  }

  // cant pass hasIcon to Link component so I handle the logic for icons here rather than in the styles/button.js file
  if (hasIcon) {
    ButtonSolid = styled(ButtonSolid)`
      ${iconCss}
    `
    ButtonGhost = styled(ButtonGhost)`
      ${iconCss}
    `
  }

  switch (type) {
    case 'solid':
      return (
        <ButtonSolid
          to={to}
          href={to}
          variant={variant}
          target={linksOut ? '_blank' : ''}
          rel={linksOut ? 'noopener nofoloow' : ''}
        >
          {children}
          {renderIcon(hasIcon, icon)}
        </ButtonSolid>
      )
    case 'ghost':
      return (
        <ButtonGhost
          to={to}
          href={to}
          variant={variant}
          target={linksOut ? '_blank' : ''}
          rel={linksOut ? 'noopener nofoloow' : ''}
        >
          {children}
          {renderIcon(hasIcon, icon)}
        </ButtonGhost>
      )
    default:
      return null
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'inverse', 'color', 'colorInverse']),
  type: PropTypes.oneOf(['solid', 'ghost']),
  hasIcon: PropTypes.bool,
  icon: PropTypes.string,
  linksOut: PropTypes.bool,
  isEmail: PropTypes.bool,
}

Button.defaultProps = {
  variant: 'default',
  type: 'solid',
  hasIcon: false,
  icon: 'arrow-right',
  linksOut: false,
  isEmail: false,
}

export default Button
