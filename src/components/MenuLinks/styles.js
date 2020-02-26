import styled from 'styled-components';
import Anilink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';


export const MenuLinksWrapper = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
`;

export const MobileMenu = styled.button`
  display: none;
  ${media.lessThan('large')`
    display: block;
    background: none;
    color: var(--highlight);
    border: 0;
    cursor: pointer;
  `}
`;

export const DropDown = styled.ul`
    display: none;
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('large')`
      display: flex;
      flex-direction: column;
      position: absolute;
      background: var(--mediumBackground);
  transition: background 3s;

      margin-top: 40px;
      margin-right: 40px;
      padding: 30px;
      right: -50px;
      border-right: 10px solid var(--highlight);

`}
 `;


export const ListWrapper = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('large')`
    display: none;
`}
 `;
 export const Item = styled.li`
  padding: 0.5rem 0;
  ${media.lessThan('large')`
  margin: 0 8px;
`}
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
