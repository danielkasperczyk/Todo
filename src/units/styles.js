import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    font-size: 10px;
    width: 100vw;
    height: 100vh;
    font-family: 'Lato', sans-serif;
  }
  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #484848
  }
`

export const theme = {
    login: '#BBE8F2',
    todo: '#36ABD9',
    notes: '#F2E749',
    text: '#484848'
}