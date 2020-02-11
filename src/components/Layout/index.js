import React from 'react';
import PropTypes from 'prop-types';
import { LayoutMain, LayoutWrapper } from './styles';
import GlobalStyle from '../../styles/global';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';


export default function Layout({ children }) {
return (
  <LayoutWrapper>
    <GlobalStyle />
        <Sidebar />
      <LayoutMain>{children}</LayoutMain>
      <MenuBar/>
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
