import styled from 'styled-components';
import media from 'styled-media-query';

export const ContactHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const ContactTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
    font-size: 2rem;
  `}
`
export const ContactDescription = styled.h2`
  font-size: 2rem;
    line-height: 1.5;
  font-weight: 200;
  padding: 0 1.4rem;
  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  font-size: 1.5rem;

  `}
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;
  margin-top: 100px;
  display: flex;
  align-items: center;
  ${media.lessThan("large")`
    flex-direction: column-reverse;
    margin-top: 20px;
  `};
`;

export const ListWrapper = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: column;
${media.lessThan("large")`
  flex-direction: row;
  align-items: center;
`}

`;

export const ItemWrapper = styled.li`
margin: 10px 0;
display: flex;
align-items: center;
color: var(--texts);
&:hover{
    color: var(--highlight);
  }

  ${media.lessThan("large")`
    margin: 50px 20px;
  `};
`;


export const  Item = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  margin-left: 5px;
  display: flex;
  align-items: center;
  &:hover{
    color: var(--highlight);
  }
  span{
    margin-left: 10px;
    ${media.lessThan("large")`
  display: none;
  `};
  }

  `;


