import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
import { ContainerProfile, ProfileLink, ProfileAuthor, ProfilePosition, ProfileDescription } from './styles';
import { Link } from 'gatsby';

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
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>{author}</ProfileAuthor>
        <ProfilePosition>{position} </ProfilePosition>
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ContainerProfile>
    )
}
