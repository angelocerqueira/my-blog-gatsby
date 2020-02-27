import React from 'react';
import Lottie from 'react-lottie';
import Animation from '../../../animations/error/human-manager-animation.json';
import { ContainerWrapper, TobackTitle, Button } from './styles';
import getThemeColor from '../../utils/getThemeColor.js';

export default function NotFound() {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <ContainerWrapper>
      <Lottie
      options={defaultOptions}
      width={500}
      height={300}
      speed={.6}
      />

      <TobackTitle>
        Hmmm... Parece que essa página não existe mais!
      </TobackTitle>

      <Button
      cover
      to="/blog"
      duration={0.6}
      direction="top"
      bg={getThemeColor()}
      >
        Voltar para o blog
      </Button>
    </ContainerWrapper>
  );
}
