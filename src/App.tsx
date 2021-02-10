import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Container } from './stylesApp';

import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Logo />
    </Container>
  );
}

export default App;
