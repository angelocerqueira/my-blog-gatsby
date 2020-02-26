import React, { useState } from 'react';
import { MenuLinksWrapper, ListWrapper, Item , ItemLink, MobileMenu, DropDown } from './styles';
import { links } from './content';
import getThemeColor from '../../utils/getThemeColor';
import { TiThMenu as Menu
} from 'react-icons/ti';
import { MdClose as Close } from 'react-icons/md'



export default function MenuLinks(){
const [showMenu, setShowMenu] = useState(false);

function toggle() {
  setShowMenu(!showMenu);
  }


  return (
    <MenuLinksWrapper >
    <MobileMenu onClick={()=> toggle()}>
     {!showMenu ? <Menu  size={30}/> : <Close size={30}/>}

    </MobileMenu>
    {showMenu ?
    <DropDown>
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
    </DropDown>
: null }
    <ListWrapper >
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
