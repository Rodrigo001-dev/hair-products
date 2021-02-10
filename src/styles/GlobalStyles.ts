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
    --color-secondary: #755553;
    --color-blue: #00008B;
    --color-blue-light: #007FFF;
    --color-background: #F0F0F0;
    --color-white: #FFF;
    --color-gray: #D3D3D3;
  }
`;