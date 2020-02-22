import styled from 'styled-components';

 export const NavWrapper = styled.nav`
 margin: 2rem auto;
 width: 100%;
 `;
 export const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
 `;
 export const ItemWrapper = styled.li`
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
