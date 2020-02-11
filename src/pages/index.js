import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";


function IndexPage() {
  return (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
    />
  </Layout>
)
}

export default IndexPage;
