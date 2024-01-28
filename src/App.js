import { CssBaseline, Grid } from '@mui/material';
import './App.css';
import AppBar from './components/AppBar'
import { Hero } from './components/Hero';
import { Servicios } from './components/Servicios';
import Footer from './components/Footer';
import { Clientes } from './components/Clientes';
import { Contacto } from './components/Contacto';

function App() {
  return (
    <div style={{backgroundColor: '#B1DBED',  minHeight: '100vh', position: 'relative', display:'flex', flexDirection:'column', alignItems:'center' }}>
            <CssBaseline />
            <AppBar/>
            <Grid
                container
                
                sx={{
                  margin: '0 auto',
                  width: '1280px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                  
                  "@media (max-width: 1300px)": {
                    width: '992px',

                  }, '@media (max-width:1024px)': {
                    width: '100%',
                }, 
                }}
            >
              <Hero/>
              <Servicios/>
              <Clientes/>
              <Contacto/>

              </Grid>
              <Footer/>

      </div>

  );
}

export default App;
