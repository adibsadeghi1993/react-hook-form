import React from 'react'
import TextField from "@material-ui/core/TextField";
import RTL from './components/RTL';
import Header from './components/Header';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Container.styled';

const App = () => {
  return (
    <RTL>
      <GlobalStyles/>
     <Header/>
          {/* <Container>
          <TextField label="Name" variant="standard" />
          <input type="text" placeholder="Name" />
          </Container> */}
      
    </RTL>
  )
}

export default App

