import React from 'react'

import {
  PaginationWrapper,
  PaginationItem,
  PaginationSubHeading,
} from '@styles/components/project/projectPagination'

const Pagination = ({ prevSlug, prevTitle, nextTitle, nextSlug }) => (
  <PaginationWrapper>
    <PaginationItem to={`/${prevSlug}`}>
      <PaginationSubHeading>Previous Project</PaginationSubHeading>
      <h3>{prevTitle}</h3>
    </PaginationItem>
    <PaginationItem to={`/${nextSlug}`}>
      <PaginationSubHeading>Next Project</PaginationSubHeading>
      <h3>{nextTitle}</h3>
    </PaginationItem>
  </PaginationWrapper>
)

export default Pagination
