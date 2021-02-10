import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --color-primary: #FFCBDB;
    --color-blue: #0061FF;
    --color-background: #F0F0F0;
    --color-white: #FFF;
  }
`;