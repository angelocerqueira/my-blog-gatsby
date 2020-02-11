import React from 'react';
import { MenuLinksWrapper, ListWrapper, Item , ItemLink} from './styles';
import links from './content';

export default function MenuLinks(){
return (
  <MenuLinksWrapper>
  <ListWrapper>
    {links.map((link, i) => (
    <Item key={i}>
      <ItemLink
      to={link.url}
      activeClassName="active">
      {link.label}
      </ItemLink>
    </Item>
    ))}
     </ListWrapper>
  </MenuLinksWrapper>

)
}
