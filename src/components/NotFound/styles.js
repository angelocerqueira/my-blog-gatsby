import styled from 'styled-components';
import Anilink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';


export const ContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
`;

export const TobackTitle = styled.h1`
  font-size: 2em;
  color: var(--texts);
  text-align: center;
  margin-bottom: 50px;
  ${media.lessThan("large")`
    font-size: 1.3em;
  `};
`;

export const Button = styled(Anilink)`
  padding: 10px 20px;
  background: var(--highlight);
  text-decoration: none;
  color: var(--white);
  border-radius: 4px;
  transition: transform ease-in-out .6s;
  &:hover {
    transform: scale(1.2);
  }
  ${media.lessThan("large")`
      margin-bottom: 30px;
  `};
`;


