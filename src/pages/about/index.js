import React from 'react';

import Layout from '../../components/Layout';
import AboutMe from '../../components/AboutMe';
import SEO from '../../components/seo';

export default function About(){
  return (
    <Layout>
      <SEO title="Sobre mim" />
      <AboutMe />
    </Layout>
  )
}

