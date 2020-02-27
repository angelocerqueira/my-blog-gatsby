import React from 'react';
import Layout from '../../components/Layout';
import Search from '../../components/Search';
import SEO from  '../../components/seo';


// import { Container } from './styles';

export default function search() {
  return (
    <Layout>
      <SEO title="Pesquisar" />
      <Search />
    </Layout>
  );
}
