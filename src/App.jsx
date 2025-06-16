import {Box, createTheme, ThemeProvider, Typography} from '@mui/material'
import { LandingPage } from './mainfolder/pages/LandingPage'
import { useState } from 'react'
function App() {

  // Dark Mode Context Provide
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode:mode 
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <LandingPage mode={mode} setMode={setMode}/>
      </Box>
    </ThemeProvider>
  )
}

export default App
