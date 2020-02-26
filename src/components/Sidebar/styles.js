import styled from 'styled-components';
import media from "styled-media-query";


export const ContainerSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 120px;
  position: fixed;
  padding: 2rem;
  text-align: center;
  background: var(--mediumBackground);
  border-right: solid 9px var(--border-side);
  transition: background 0.5s;

  /* box-shadow: 0 0 0 9px ; */

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    z-index: 1000;
    flex-direction: row;
  `}
`;
