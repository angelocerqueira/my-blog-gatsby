import React from 'react';
import Typist from 'react-typist';
import { ContainerWrapper, Title, Cta } from './styles';
import getThemeColor from '../../utils/getThemeColor';

export default function Home() {
  return (
    <>
      <ContainerWrapper >
        <Typist className="MyTypist">
          <Title>
            <Typist.Delay ms={2000} />
            Hi,
            <br/>
            eu sou <span>Ângelo</span>,
            <br/>
            FullStack <span>Developer</span>
            <br/> e entusiasta <span>UI/UX.</span>
          </Title>
          <Typist.Delay ms={500} />
          <Cta
          to="/about"
          cover
          direction="top"
          duration={0.6}
          background={getThemeColor()}
          >
          Vamos conversar
          </Cta>
        </Typist>
      </ContainerWrapper>
</>
  );
}
