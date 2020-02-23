import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

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
  transition: background 0.5s;
  z-index: 1001;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
  flex-direction: row;
  `}
`;

export const MenuBarLink = styled(Link)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
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

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`;
