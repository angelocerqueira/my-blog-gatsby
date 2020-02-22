import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 3.75rem;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  &.light {
    color: #d4d400;
    &:hover {
    color: #d4d400;

    }
  }
`;
