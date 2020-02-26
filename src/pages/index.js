import React from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Loading from '../components/Loading';
import Loadable from 'react-loadable';


const ParticlesBg = Loadable({
  loader: () => import('particles-bg'),
  loading: Loading,
});

export default function BlogPost() {

  return (
    <Layout>
      <Home />
      <ParticlesBg
      type="cobweb"
      color="#eee"
      num={30}
      bg={true} />
    </Layout>
    );
}





