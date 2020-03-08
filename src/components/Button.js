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

const buttonStyles = css`
  ${defaultStyles}
  ${props => {
    if (props.hasIcon) {
      return css`
        ${iconCss}
      `
    }
  }}
  ${props => {
    if (props.type === 'ghost') {
      return css`
        ${ghostStyles}
      `
    } else {
      return css`
        ${primaryStyles}
      `
    }
  }}
`

const ButtonA = styled.a`
  ${buttonStyles}
`

const ButtonLink = styled(({ type, variant, hasIcon, ...props }) => (
  <Link {...props} />
))`
  ${buttonStyles}
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
  if (linksOut || isEmail) {
    return (
      <ButtonA
        to={to}
        href={to}
        type={type}
        variant={variant}
        target={linksOut ? '_blank' : ''}
        rel={linksOut ? 'noopener nofoloow' : ''}
        hasIcon={hasIcon}
      >
        {children}
        {renderIcon(hasIcon, icon)}
      </ButtonA>
    )
  } else {
    return (
      <ButtonLink to={to} variant={variant} type={type} hasIcon={hasIcon}>
        {children}
        {renderIcon(hasIcon, icon)}
      </ButtonLink>
    )
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
