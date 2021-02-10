import React from 'react';

import { ContainerLogo, Image, LogoContainer, ContainerButton, } from './styles';

import ImageJapanese from '../../assets/images/Japanese.jpg';

const Logo: React.FC = () => {
  return (
    <>
      <ContainerLogo>
        <Image src={ImageJapanese} alt="Imagem Japonesa"/>
        <LogoContainer>
          <h2>CAPILAR <br/> <strong>FORTALECIMENTO</strong></h2>
          <span>
            Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a fortalecer o cabelo, combater a queda e tratar a tão indesejada caspa.
          </span>
        </LogoContainer>
      </ContainerLogo>

      <ContainerButton>
        <button>Quantidade</button>
        <button>Ordenar</button>
      </ContainerButton>
    </>
  );
};

export default Logo;