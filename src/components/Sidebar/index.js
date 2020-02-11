import React from 'react';

import Profile from '../Profile';
import MenuLinks from '../MenuLinks';
import { ContainerSidebar } from './styles';
import SocialLinks from '../SocialLinks';

export default function Sidebar() {
return (
  <ContainerSidebar>
    <Profile/>
    <SocialLinks/>
    <MenuLinks/>
  </ContainerSidebar>
)

}
