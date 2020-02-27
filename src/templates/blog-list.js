import React from 'react';
import { graphql } from 'gatsby';
import { ListWrapper } from '../components/ListWrapper/styles';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";
import Pagination from '../components/Pagination';

export default function BlogList(props) {
  const postList = props.data.allMarkdownRemark.edges;

  const { currentPage, numPages } = props.pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;


  return (
    <Layout>
    <SEO title="Blog" />
    <ListWrapper>

    { postList.map(({
      node: {
        fields: { slug },
        id, timeToRead,
        frontmatter: { background, category, date, description, title }
      }
    }) => (
      <PostItem key={id}
      slug={slug}
      background={background}
      category={category}
      date={date}
      timeToRead={timeToRead}
      title={title}
      description={description}
      />
    ))}

    <Pagination
      isFirst={isFirst}
      isLast={isLast}
      currentPage={currentPage}
      numPages={numPages}
      prevPage={prevPage}
      nextPage={nextPage}
    />
    </ListWrapper>

  </Layout>
  )
}

export const query = graphql`
query PostList ($skip: Int!, $limit: Int!){
  allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
    limit: $limit
    skip: $skip
    ) {
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          background
          category
          date(locale: "pt-br" formatString:  "DD [de] MMMM [de] YYYY")
          description
          title
        }
        timeToRead
      }
    }
  }
}
  `;





