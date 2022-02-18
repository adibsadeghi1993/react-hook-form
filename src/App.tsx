import React from 'react'
import TextField from "@material-ui/core/TextField";
import RTL from './components/RTL';

const App = () => {
  return (
    <RTL>
      <div dir="rtl">
          <TextField label="Name" variant="standard" />
          <input type="text" placeholder="Name" />
        </div>
    </RTL>
  )
}

export default App

