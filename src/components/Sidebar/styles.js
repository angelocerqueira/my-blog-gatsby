import styled from 'styled-components';
import media from "styled-media-query";


export const ContainerSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* max-width: 20rem;
  min-width: 10rem; */
  position: fixed;
  padding: 2rem;
  text-align: center;
  background: var(--mediumBackground);
  border-right: solid 1px var(--borders);

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    z-index: 1000;
  `}
`;
