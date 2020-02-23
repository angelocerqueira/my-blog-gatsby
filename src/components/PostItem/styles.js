import styled from 'styled-components';
import Anilink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';


export const PostItemLink = styled(Anilink)`
  display: flex;
  text-decoration: none;
  color: var(--texts);
  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--borders);

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  background: ${props => props.background ? props.background : 'var(--highlight)' };
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--postColor);
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1em;
  }

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: .2rem 0 .5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;
export const PostItemDescription = styled.p``;


