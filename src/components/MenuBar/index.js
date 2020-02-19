import React from 'react';
import { MenuBarGroup, MenuBarWrapper, MenuBarLink,MenuBarItem } from './styles';
import { FaHome as Home, FaSearch as Search, FaRegLightbulb as Light, FaArrowUp as ArrowTop } from 'react-icons/fa';
import { MdGridOn as Grid } from 'react-icons/md';

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
            <Light size={20}/>
          </MenuBarItem>
          <MenuBarItem title="Mudar a visualização">
            <Grid size={20} />
          </MenuBarItem>
          <MenuBarItem title="Ir para o topo">
            <ArrowTop size={20} />
          </MenuBarItem>
      </MenuBarGroup>

    </MenuBarWrapper>

  )
}
