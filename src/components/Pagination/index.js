import React from 'react';
import propTypes from 'prop-types';
import { PaginationWrapper } from './styles';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import getThemeColor from '../../utils/getThemeColor';

export default function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage }
  ) {

  return (
    <PaginationWrapper>
      {!isFirst &&
      <AniLink
      cover
      to={prevPage}
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      >
        Página anterior
      </AniLink>
      }

      <p>
      {currentPage} de {numPages}
      </p>

      {!isLast &&
      <AniLink
        cover
        to={nextPage}
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        >
        Próxima página
      </AniLink>
      }

    </PaginationWrapper>
  );
}
Pagination.propTypes = {
isFirst: propTypes.bool.isRequired,
isLast: propTypes.bool.isRequired,
currentPage: propTypes.number.isRequired,
numPages: propTypes.bool.isRequired,
prevPage: propTypes.string,
nextPage: propTypes.string,
}
