import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: auto;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, root{
    max-height: 100vh;
    max-width: 100vh;

    width: 100%;
    height: 100%;
  }

  *, button, input{
    border: 0;
    background: none;
    color: var(--white);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html{
    background: var(--primary);
  }
  :root{
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    }
`;