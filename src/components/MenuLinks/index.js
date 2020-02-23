import React from 'react';
import { MenuLinksWrapper, ListWrapper, Item , ItemLink} from './styles';
import links from './content';
import getThemeColor from '../../utils/getThemeColor';

export default function MenuLinks(){
return (
  <MenuLinksWrapper>
  <ListWrapper>
    {links.map((link, i) => (
    <Item key={i}>
      <ItemLink
      to={link.url}
      cover
      direction="top"
      bg={getThemeColor()}
      duration={0.6}
      activeClassName="active">
      {link.label}
      </ItemLink>
    </Item>
    ))}
     </ListWrapper>
  </MenuLinksWrapper>

)
}
