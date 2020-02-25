import styled from 'styled-components';
import media from 'styled-media-query';



 export const NavWrapper = styled.nav`
 margin: 2rem auto;
 width: 100%;

 ${media.lessThan('large')`
  display: none;
 `
 }
 `;
 export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
 `;
 export const ItemWrapper = styled.li`
  margin: 10px 0;
`;

export const  Item = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover{
    color: var(--highlight);
  }

  `;


export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
