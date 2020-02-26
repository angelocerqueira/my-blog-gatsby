import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';


export const ContainerWrapper = styled.div`
  color: var(--postColor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  height: 100vh;
  /* max-width: 70rem; */
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  line-height: 1.2em;
  background: -webkit-linear-gradient(180deg, var(--titleHomeBg1), var(--titleHomeBg2) );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
  ${media.lessThan("large")`
    font-size: 2em;
  ` };
  span {
    background: var(--titleHomeBg1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Cta = styled(AniLink)`
  border: 0;
  background: var(--cta2);
  background: -webkit-linear-gradient(to right, var(--cta1), var(--cta2));
  background: linear-gradient(to right, var(--cta1), var(--cta2));
  padding: 20px;
  color: var(--white);
  border-radius: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition:  background  4s ease-in-out;
  &:hover {
    background: var(--cta2);
    background: -webkit-linear-gradient(to right,var(--cta2), var(--cta1));
    background: linear-gradient(to right, var(--cta2), var(--cta1));
  }
  ${media.lessThan("large")`
  padding: 10px 15px;

  ` };
`;

