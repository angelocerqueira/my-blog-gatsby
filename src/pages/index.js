import React from 'react';
import ParticlesBg from 'particles-bg';
import Layout from '../components/Layout';
import Home from '../components/Home';

export default function BlogPost() {


  return (
    <Layout>
      <Home />
      <ParticlesBg type="cobweb" color="#eee" bg={true} />
    </Layout>
    );
}





