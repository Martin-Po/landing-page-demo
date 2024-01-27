import { CssBaseline, Grid } from '@mui/material';
import './App.css';
import AppBar from './components/AppBar'
import { Hero } from './components/Hero';

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
                  "@media (max-width: 1300px)": {
                    width: '992px',

                  }, '@media (max-width:1024px)': {
                    width: '100%',
                }, 
                }}
            >
              <Hero/>
              </Grid>

      </div>

  );
}

export default App;
