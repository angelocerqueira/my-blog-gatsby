import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #8899a6;
  &:hover {
    color: #1fa1f2;
  }
`;

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #38444d;
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  background: ${props => props.background ? props.background : '#1fa1f2' };
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: .2rem 0 .5rem;
`;
export const PostItemDescription = styled.p``;


