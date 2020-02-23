import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
import { ContainerProfile, ProfileLink, ProfileAuthor, ProfilePosition, ProfileDescription } from './styles';
import getThemeColor from '../../utils/getThemeColor';

export default function Profile(){
  const  {
    site:
      { siteMetadata: {
        description,
        position,
        author
      }
    }
  } = useStaticQuery(graphql` query MysiteMetadata {
    site {
      siteMetadata {
        title
        description
        position
        author
      }
    }
  }
  `);

  return (
    <ContainerProfile >
      <ProfileLink
      to="/"
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
      >
        <Avatar />
        <div>
        <ProfileAuthor>{author}</ProfileAuthor>
        <ProfilePosition>{position} </ProfilePosition>
        </div>
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ContainerProfile>
    )
}
