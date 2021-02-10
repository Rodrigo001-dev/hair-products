import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Container } from './stylesApp';

import Header from './components/Header';
import Logo from './components/Logo';
import Content from './components/Content';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Logo />
      <Content />
    </Container>
  );
}

export default App;
