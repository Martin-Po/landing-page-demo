import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Scroll from 'react-scroll'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme'

const scroll = Scroll.animateScroll

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App scroll={scroll} />
    </ThemeProvider>
)
reportWebVitals()
