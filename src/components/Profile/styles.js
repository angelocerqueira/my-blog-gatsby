import styled from "styled-components";
import { Link } from 'gatsby';


export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #8899a6;

`;

export const ProfileLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProfilePosition = styled.small`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProfileDescription = styled.h1`
  margin-top: 10px;
  font-size: 14px;
`;


