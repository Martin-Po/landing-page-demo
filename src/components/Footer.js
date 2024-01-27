import { Box, Typography } from '@mui/material'

function Footer() {

    return (
        <Box
            sx={{   marginTop:'15px', backgroundColor: 'primary.main', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'           , width:'100%'


            }}
        >
            <Box
                sx={{
                    flex: 1,  // Make this area take up all available space
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                {/* Content Goes Here */}
            </Box>
            
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem',
                }}
            >
                <Typography variant="h2" fontSize="1rem" fontWeight="500" opacity='0.85'>
                        Hecho por Martin Ponce
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
