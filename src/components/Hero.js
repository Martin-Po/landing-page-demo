import { Button, Grid, Typography } from '@mui/material'
import HeroImage from '../assets/hero_image.png'

const Hero = () => {
    return (
        <>
            <Grid
                item
                xs={12}
                sm={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                }}
            >
                <Typography sx={{fontWeight:'bold', fontSize:'2rem'}}>
                ¿Necesitas un profesional de confianza para tus proyectos de albañilería, mantenimiento y carpintería?
                </Typography>
                <Typography sx={{marginTop:'1rem', fontWeight:'300', fontSize:'1.25rem'}}>
                Soy Walter, un contratista con más de 30 de experiencia en el sector. Realizo todo tipo de trabajos de albañilería, mantenimiento y carpintería, desde pequeñas reparaciones hasta reformas integrales. Me adapto a tus necesidades y presupuesto, y te garantizo un servicio de calidad y puntualidad.
                </Typography>
                <Button 
                sx={{
                    marginTop: '1.5rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    borderRadius: '35px',
                    fontSize: '1.125rem',
                    backgroundColor:'primary.main'
                    
                }}

                variant="contained"
            >
                <Typography sx={{color:'secondary.contrastText', fontWeight:'bold'}}>
                    Póngase en contacto conmigo
                </Typography>
                    
            </Button>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img
                    style={{
                        width: '100%',
                    }}
                    src={HeroImage}
                    alt="Hero"
                />
            </Grid>
           
        </>
    )
}

export { Hero }
