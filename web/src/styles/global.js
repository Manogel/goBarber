import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,700i,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html{
    height: 100%;
  }

  body {
    background: #f7f7f7;
    height: 100%;
    -webkit-font-smoothing: antialiased !important

  }
  body, input, button {
    border: 0;
    color: #222;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
