import React from 'react'
import { Link } from 'gatsby'

const linkResolver = function linkResolver(doc) {
  return `/${doc.uid}`
}
// eslint-disable-next-line
const customLink = (type, element, content, children, index) => (
  <Link key={element.data.id} to={linkResolver(element.data)}>
    {content}
  </Link>
)

export { customLink, linkResolver }
