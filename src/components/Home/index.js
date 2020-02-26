import React from 'react';
import Typist from 'react-typist';
import { ContainerWrapper, Title, Cta } from './styles';
import getThemeColor from '../../utils/getThemeColor';

export default function Home() {
  return (
      <ContainerWrapper >
        <Typist>
          <Title>
            <Typist.Delay ms={2000} />
            Oi,
            <br/>
            eu sou <span>Ângelo</span>,
            <br/>
            FullStack <span>Developer</span>
            <br/> e entusiasta <span>UI/UX.</span>
          </Title>
          <Typist.Delay ms={500} />
          <Cta
          to="/contact"
          cover
          direction="top"
          duration={0.6}
          background={getThemeColor()}
          >
          Vamos conversar
          </Cta>
        </Typist>
      </ContainerWrapper>
  );
}
