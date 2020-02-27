import React from 'react';

import Layout from '../../components/Layout';
import Contact from '../../components/Contact';
import SEO from '../../components/seo';

export default function contact() {
  return (
    <Layout>
      <SEO title="Contato" />
      <Contact />
    </Layout>
  );
}
