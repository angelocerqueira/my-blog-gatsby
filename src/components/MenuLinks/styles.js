import styled from 'styled-components';
import Anilink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const MenuLinksWrapper = styled.nav`

${media.lessThan('large')`
  display: none;
`}
`;
export const ListWrapper = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
 `;
 export const Item = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--highlight);
  }
`;

export const ItemLink = styled(Anilink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover{
    color: var(--highlight);
  }
`;
