import React from 'react';
import PropTypes from 'prop-types';
import { LayoutMain, LayoutWrapper } from './styles';
import GlobalStyle from '../../styles/global';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

export default function Layout({ children }) {
return (
  <LayoutWrapper>
    <GlobalStyle />
    <TransitionPortal>
        <Sidebar />
    </TransitionPortal>
      <LayoutMain>
        {children}
      </LayoutMain>
      <TransitionPortal>
      <MenuBar/>
      </TransitionPortal>
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
