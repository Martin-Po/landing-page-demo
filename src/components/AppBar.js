import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'




function ResponsiveAppBar() {
    console.log('inside appbar');
    return (
        <AppBar position="static" style={{ backgroundColor: 'primary.main', boxShadow: 'none'}}>
            <Container 
                maxWidth={false}
                
                sx={{
                    width: '1280px',

                    '@media (max-width:1300px)': {
                        width: '992px',
                    },
                    '@media (max-width:1024px)': {
                        width: '100%',
                    },
                }}
            >
                <Toolbar disableGutters>
                    
                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                        }}
                    >                        
                        
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
