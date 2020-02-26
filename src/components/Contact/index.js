import React from 'react';
import Lottie from 'react-lottie';
import AnimationContact from '../../../programming-animation.json';
import content from './content';

import { ContactHeader, ContactTitle, MainContent, ContactDescription, ItemWrapper ,Item, ListWrapper } from './styles';

export default function Contact() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationContact,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
    <ContactHeader>
      <ContactTitle>Ah, que recíproco! <span aria-label="coração" role="img">💜🖤</span> </ContactTitle>

      <ContactDescription>
        Também quero conversar com você... <b/>
        Pode me achar facilmente nas redes abaixo, chama aí: <span aria-label="Abaixo" role="img">👇</span>
      </ContactDescription>
    </ContactHeader>
    <MainContent>
    <div>
      <ListWrapper>
        { content.map(item => (
        <ItemWrapper key={item.label}>  <Item href={item.url} target="_blank">{item.icon} <span>{item.url}</span> </Item></ItemWrapper>
        )) }
      </ListWrapper>
    </div>

    <Lottie options={defaultOptions}
              height={300}
              width={300}
              />
    </MainContent>
    </>
  );
}
