import React from 'react';
import propTypes from 'prop-types';
import { PaginationWrapper } from './styles';
import { Link } from 'gatsby';

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
      <Link to={prevPage}>
        Página anterior
      </Link>
      }

      <p>
      {currentPage} de {numPages}
      </p>

      {!isLast &&
      <Link to={nextPage}>
        Próxima página
      </Link>
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
