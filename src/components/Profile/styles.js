import styled from "styled-components";
import Anilink from 'gatsby-plugin-transition-link/AniLink';

import media from 'styled-media-query';


export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--texts);
`;

export const ProfileLink = styled(Anilink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

${ media.lessThan("large")`
  display: flex;
  justify-content: center;
  align-items: center;


  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    margin-left: 10px;
  }
  ` }

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;

  ${ media.lessThan("large")`
    font-size: 1.2rem;
    margin-top: 0px;

  ` }
`;

export const ProfilePosition = styled.small`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProfileDescription = styled.h1`
  margin-top: 10px;
  font-size: 14px;
  ${ media.lessThan("large")`
  display: none;
` }
`;


