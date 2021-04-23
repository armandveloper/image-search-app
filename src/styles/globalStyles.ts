import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    background-color: #2B3E50;
    color: #fff;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 1.6em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
  }
  .btn {
    background-color: #4E3540;
    border: none;
    border-radius: 0.4rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 1.6rem;
    text-align: center;
    padding: 0.8rem 1.2rem;
    &:focus {
      outline: none;
    }
    &:first-child {
      margin-right: 2rem;
    }
    &--secondary {
      background-color: #c63e12;
      color: #fff;
    }
    &--block {
      display: block;
      width: 100%;
    }
  }
`;
