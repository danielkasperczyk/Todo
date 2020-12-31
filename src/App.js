import React from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './units/styles';

import UserProvider from './providers/UserProvider';
import Main from './components/Main';

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <Main />
      </UserProvider>
    </ThemeProvider>

  ) 
}

export default App;
