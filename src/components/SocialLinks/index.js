import React from 'react';
import {NavWrapper, ListWrapper, Item, ItemWrapper, IconWrapper } from './styles';
import links from './content';
export default function  SocialLinks(){


  return (
    <NavWrapper>
      <ListWrapper>
       {links.map((link,i) => (
         <ItemWrapper key={i}>
          <Item
           href={link.url}
           target="_blank"
           title={link.label}
           rel="noopener noreferrer  ">
            {link.icon}
          </Item>
        </ItemWrapper>
       ))}
      </ListWrapper>
    </NavWrapper>
  )
}
