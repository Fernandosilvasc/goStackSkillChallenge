import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    display: flex;
    background: #000000;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
