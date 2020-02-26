import React from 'react';

import { PostHeader, PostTitle, MainContent, PostDescription } from './styles';

export default function AboutMe() {
  return (
    <>
    <PostHeader>
      <PostTitle>
        Hey guys <span aria-label="Hi" role="img">😎</span>,
      </PostTitle>
      <PostDescription>

      </PostDescription>
    </PostHeader>
    <MainContent>
    <p>Me chamo Ângelo, sou fullStack Developer e entusiasta UI/UX em constante formação (é sério, estudo todo dia desde que conheci a programação <span aria-label="notebook" role="img"> 💻</span>).<br/> Há mais ou menos um ano (em 2019), eu tive meu primeiro contato intenso com a programação e desde então não larguei mais.<span aria-label="coração" role="img">💜</span></p>
    <p>Mas eu ficava trocando de linguagem e não focava em nenhuma. Fiquei assim por uns sete meses e nesse período conheci java, python, php e laravel. <br/>
    <strong>NÃO FAÇAM ISSO, É SÉRIO!! <span aria-label="negação" role="img">🚫😤</span></strong>
    <br/>
    Escolha uma e foque nela, depois o resto fica mais fácil. (Em breve faço um post explicando como começar, prometo).
    </p>

    <p>Mas bem, atualmente estou cursando ciência da computação e finalizando um EAD em Gestão da Tecnologia da Informação.  Trabalho como freelancer na web. Mas logo, logo quero entrar em uma empresa/startup bem massinha.</p>

    <h3>Com quais tecnologias trabalho?</h3>
    <p>Olha, eu amo tudo que envolve o javascript, mas escolhi dar foco na stack <b>ReactJs, NodeJs e React Native</b>. Perfeita para o desenvolvimento de uma aplicação completa, lidando com o backend, frontend e mobile. </p>
    <h3> Principais Habilidades: </h3>

    <ul>
      <li>User Interface</li>
      <li>User Experience</li>
      <li>NodeJS</li>
      <li>ReactJS / Redux / Arquitetura Flux</li>
      <li>Javascript (Testes, ES6+)</li>
      <li>Gatsby - PWA</li>
      <li>MySQL - MongoDB - Postgres</li>
      <li>Wordpress</li>
      <li>Git</li>
      <li>Scrum and Kanban</li>
      <li>HTML e Template Languages</li>
      <li>TDD e Continuous Integration</li>
      <li>Design Responsivo (Mobile First)</li>

    </ul>
    <p>Já participei de alguns eventos bem massinhas também, como a Campus Party, Startup Weekend, dois Hackathons. Eventos estes que recomendo para qualquer pessoa que quer desenvolver habilidades intrapessoas e dar o seu melhor. (Esse assunto merece um post também).</p>

    <p> Se quiser saber mais, me chama em qualquer rede social ali e vamos bater um papo, até mais. <span aria-label="tchau, tchau" role="img"></span>👋👋 </p>
    </MainContent>
    </>

  );
}
