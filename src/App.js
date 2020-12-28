import React from 'react'
import { Router } from 'react-router-dom';
import Login from './components/Login'
import { GlobalStyle, theme } from './units/styles';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return(
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  ) 
}


export default App;
