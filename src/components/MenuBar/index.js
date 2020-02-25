import React, { useState, useEffect } from 'react';
import { MenuBarGroup, MenuBarWrapper, MenuBarLink,MenuBarItem } from './styles';
import {
  FaHome as Home,
  FaSearch as Search,
  FaRegLightbulb as Light,
  // FaArrowUp as ArrowTop,
  FaThList as List
 } from 'react-icons/fa';

 import { AiFillAppstore as Grid } from 'react-icons/ai';
import getThemeColor from '../../utils/getThemeColor';


export default function MenuBar(){
  const [theme, setTheme  ] = useState(null);
  const [display, setDisplay  ] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  useEffect( () => {
    setDisplay(window.__display);
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        title="Voltar para a home">
          <MenuBarItem>
            <Home size={20}/>
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to="/search"
        title="Pesquisar">
          <MenuBarItem>
            <Search size={20} />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="courses" title="Ir para os cursos">
          <MenuBarItem></MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>

      <MenuBarGroup>
          <MenuBarItem
          title="Mudar o tema"
          onClick={ () => {
            window.__setPreferredTheme(isDarkMode ? 'light': 'dark')
          }}
          className={theme}
          >
            <Light size={20}/>
          </MenuBarItem>
          <MenuBarItem
          title="Mudar a visualização"
          onClick={ () => {
             window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          className="display"
          >
          { isListMode ? <Grid size={20} /> : <List size={20} /> }
          </MenuBarItem>
          {/* <MenuBarItem title="Ir para o topo">
            <ArrowTop size={20} />
          </MenuBarItem> */}
      </MenuBarGroup>

    </MenuBarWrapper>

  )
}
