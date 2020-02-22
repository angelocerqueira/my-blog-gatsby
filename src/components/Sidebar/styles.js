import styled from 'styled-components';

export const ContainerSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 20rem;
  min-width: 10rem;
  position: fixed;
  padding: 2rem;
  text-align: center;
  background: var(--mediumBackground);
  border-right: solid 1px var(--borders);
`;
