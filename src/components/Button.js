import PropTypes from 'prop-types'
import React from 'react'
import Icon from '@components/Icon'

import { ButtonA, ButtonLink } from '@styles/components/button'

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
