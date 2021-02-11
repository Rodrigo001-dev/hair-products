import React from 'react';

import ImageBrunette from '../../assets/images/brunette.jpg';

import { 
  Container, 
  ContainerMain, 
  ContainerText,
  ContainerFooter 
} from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <h2>SHAMPOOS E DERMOCOSMÉTICOS</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

      <ContainerMain>
        <div className="content">
          <h2>COMO ESCOLHER O MELHOR SHAMPOO?</h2>
          <p>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
          </p>
        </div>

        <div>
          <div className="image">
            <div>
              <span>CONHEÇA NOSSOS <strong>SHAMPOOS {'>'}</strong></span>
            </div>

            <img src={ImageBrunette} alt=""/>
          </div>
        </div>
      </ContainerMain>

      <ContainerText>
        <div>
          <h2>QUEDA DE CABELO NUNCA MAIS</h2>
          <p>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
          </p>
        </div>
      </ContainerText>

      <ContainerFooter>
        <div>
          <h2>ANTICASPA</h2>
          <p>
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.
          </p>
        </div>

        <div className="link">
          Para mais innformações sobre o combate a caspa. acesse o <a href="#">Dermaclub</a>
        </div>

        <hr/>
      </ContainerFooter>

    </Container>
  );
};

export default Content;