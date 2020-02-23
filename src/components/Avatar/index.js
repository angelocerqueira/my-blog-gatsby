import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {AvatarWrapper } from './styles';


export default function Avatar (){
  const { avatarImage } = useStaticQuery(
   graphql`
   query {
    avatarImage: file(relativePath: { eq: "image-profile.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
   }
   `
 )

  return (
    <AvatarWrapper className="Avatar" fluid={avatarImage.childImageSharp.fluid}/>
  )
}
