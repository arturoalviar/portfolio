import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Icon from '@components/Icon'
import { smallText } from '@styles/typography'
import { socialLinks } from 'config/vars'

const SocialItems = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const SocialItem = styled.li`
  display: inline-block;
  margin-bottom: 0;
  ${smallText}
`

const SocialLink = styled.a`
  padding: ${props => props.theme.mixins.remCalc(5)}
    ${props => props.theme.mixins.remCalc(12)};
  svg {
    fill: ${props => props.theme.colors.main};
    transition: fill 0.3s ease-in-out;
  }
  &:hover {
    svg {
      fill: ${props => props.theme.mixins.remCalc(56)};
    }
  }
`
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
