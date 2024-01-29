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
                    marginBottom: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        '@media (max-width:600px)': { fontSize: '1.25rem' },
                    }}
                >
                    ¿Necesitas un profesional de confianza para tus proyectos de
                    albañilería, mantenimiento y carpintería?
                </Typography>
                <Typography
                    sx={{
                        marginTop: '1rem',
                        fontWeight: '300',
                        fontSize: '1.25rem',
                        '@media (max-width:600px)': {
                            fontSize: '1rem',
                        },
                    }}
                >
                    Soy Walter, un contratista con más de 30 de experiencia en
                    el sector. Realizo todo tipo de trabajos de albañilería,
                    mantenimiento y carpintería, desde pequeñas reparaciones
                    hasta reformas integrales. Me adapto a tus necesidades y
                    presupuesto, y te garantizo un servicio de calidad y
                    puntualidad.
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
                        backgroundColor: 'primary.main',
                        '@media (max-width:600px)': {  paddingLeft: '1rem',
                        paddingRight: '1rem', },

                    }}
                    variant="contained"
                >
                    <Typography
                        sx={{
                            color: 'secondary.contrastText',
                            fontWeight: 'bold',
                            '@media (max-width:600px)': { fontSize: '0.85rem' },
                        }}
                    >
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
                        maxWidth: '471px',
                        maxHeight: '471px',
                    }}
                    src={HeroImage}
                    alt="Hero"
                />
            </Grid>
        </>
    )
}

export { Hero }
