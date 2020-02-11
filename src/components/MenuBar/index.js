import React from 'react';
import { MenuBarGroup, MenuBarWrapper, MenuBarLink,MenuBarItem } from './styles';
import { FaHome as Home, FaSearch as Search } from 'react-icons/fa';

export default function MenuBar(){
  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink to="/" title="Voltar para a home">
          <MenuBarItem>
            <Home size={20}/>
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/search" title="Pesquisar">
          <MenuBarItem>
            <Search size={20} />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="courses" title="Ir para os cursos">
          <MenuBarItem></MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>

      <MenuBarGroup>
          <MenuBarItem title="Mudar o tema">
          </MenuBarItem>
          <MenuBarItem title="Mudar a visualização">
          </MenuBarItem>
          <MenuBarItem title="Ir para o todo">
          </MenuBarItem>
      </MenuBarGroup>

    </MenuBarWrapper>

  )
}
