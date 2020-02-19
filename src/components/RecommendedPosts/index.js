import React from 'react';
import propTypes from 'prop-types';
import { RecommendedLink, RecommendedWrapper } from './styles';

export default function RecommendedPosts({ next, previous } ) {
  return (
    <RecommendedWrapper>
      {previous && (
        <RecommendedLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </RecommendedLink>

      )}

      {next && (
      <RecommendedLink to={ next.fields.slug} className="next">
        {next.frontmatter.title}
      </RecommendedLink>
      )}
    </RecommendedWrapper>
  );
}

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
  }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
      slug: propTypes.string.isRequired,
  })
}
