import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@components/Icon'

import { socialLinks } from 'config/vars'

import { SocialItems, SocialItem, SocialLink } from '@styles/components/social'

const renderIcons = item => {
  const socialLink = socialLinks[item]
  return (
    <SocialItem key={`${socialLink.label}-${Date.now()}`}>
      <SocialLink
        href={socialLink.link}
        target="_blank"
        rel="noopener nofoloow"
        aria-label={socialLink.label}
      >
        <Icon name={socialLink.icon} width="32px" height="32px" />
      </SocialLink>
    </SocialItem>
  )
}
const renderLabels = item => {
  const socialLink = socialLinks[item]
  return (
    <SocialItem key={`${socialLink.label}-${Date.now()}`}>
      <SocialLink
        href={socialLink.link}
        target="_blank"
        rel="noopener nofoloow"
      >
        {socialLink.label}
      </SocialLink>
    </SocialItem>
  )
}

const Social = ({ icons }) => {
  const social = Object.keys(socialLinks)

  if (!icons) {
    return <SocialItems>{social.map(renderLabels)}</SocialItems>
  } else {
    return <SocialItems>{social.map(renderIcons)}</SocialItems>
  }
}

Social.propTypes = {
  icons: PropTypes.bool,
}

Social.defaultProps = {
  icons: true,
}

export default Social
