import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    
    font-family: 'Rubik', sans-serif;
  }
  
  html, body {
    min-height: 100vh;
    width: 100%;
    font-size: 1rem;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Cinzel', serif;
  }
  
`;
