import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from "../components/seo";

import { PostHeader, PostTitle, PostDescription, MainContent, PostDate  } from '../components/PostStyled/styles';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

export default function BlogPost({ data, pageContext }) {

  const {
    html,
    timeToRead,
    fields: {
      slug
    },
    frontmatter: {
      title,
      date,
      description } } = data.markdownRemark;

  const  next  = pageContext.nextPost;
  const  previous  = pageContext.previousPost;


  return (
    <Layout>
    <SEO title={ title } />
    <PostHeader>
      <PostDate>
        {date} - {timeToRead} minutos de leitura
      </PostDate>
      <PostTitle>{ title }</PostTitle>
      <PostDescription>
        {description}
      </PostDescription>
    </PostHeader>
      <MainContent dangerouslySetInnerHTML={{ __html: html }} />

    <RecommendedPosts
    previous={previous}
    next={next}
    />
    <Comments title={title}  url={slug} />
    </Layout>


    );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br" formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
  `;





