import { Button, Grid, Paper, Typography } from '@mui/material'
import HeroImage from '../assets/hero_image.png'
import Avatar from '@mui/material/Avatar'
import IconoCarpinteria from '../assets/icono_carpinteria.png'
import IconoElectricidad from '../assets/icono_electricidad.png'
import IconoPintura from '../assets/icono_pintura.png'
import IconoPisos from '../assets/icono_pisos.png'

const Servicios = () => {
    return (
        <>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        margin: '2rem',
                    }}
                >
                    ¿COMO PUEDO AYUDARTE?
                </Typography>
            </Grid>
            <Grid container spacing={1} sx={{ display: 'flex' }}>
                <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                    }}
                >
                    <Paper
                        sx={{ width: '100%', height: '100%', padding: '1rem' }}
                    >
                        <Grid container spacing={1} sx={{ display: 'flex' }}>
                            <Grid item xs={3} sm={12}>
                                <Avatar
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        width: '4rem',
                                        height: '4rem',
                                    }}
                                >
                                    <img
                                        style={{
                                            width: '3rem',
                                            height: '3rem',
                                        }}
                                        src={IconoCarpinteria}
                                        alt="Icono Carpintería"
                                    />
                                </Avatar>
                            </Grid>
                            <Grid item xs={9} sm={12}>
                                <Typography
                                    sx={{
                                        display: 'flex',
                                        
                                        justifyContent: 'left',

                                        fontWeight: 'bold',
                                        marginTop: '15px',
                                        fontSize: '1.25rem',
                                        '@media (max-width:500px)': {
                                        justifyContent: 'center',
                                    }, 
                                        
                                    }}
                                    
                                >
                                    Carpintería
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography
                            sx={{ marginTop: '1rem', fontWeight: '300' }}
                        >
                            Realizo todo tipo de trabajos de carpintería, desde
                            pequeñas reparaciones hasta grandes proyectos.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                    }}
                >
                    <Paper
                        sx={{ width: '100%', height: '100%', padding: '1rem' }}
                    >
                        <Avatar
                            sx={{
                                backgroundColor: 'primary.main',
                                width: '4rem',
                                height: '4rem',
                            }}
                        >
                            <img
                                style={{
                                    width: '3rem',
                                    height: '3rem',
                                }}
                                src={IconoElectricidad}
                                alt="Icono Electricidad"
                            />
                        </Avatar>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                marginTop: '15px',
                                fontSize: '1.25rem',
                            }}
                        >
                            Electricidad
                        </Typography>
                        <Typography
                            sx={{ marginTop: '1rem', fontWeight: '300' }}
                        >
                            Ofrezco servicios de electricidad básicos, como
                            instalaciones, reparaciones, mantenimiento, y
                            conexiones eléctricas.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                    }}
                >
                    <Paper
                        sx={{ width: '100%', height: '100%', padding: '1rem' }}
                    >
                        <Avatar
                            sx={{
                                backgroundColor: 'primary.main',
                                width: '4rem',
                                height: '4rem',
                            }}
                        >
                            <img
                                style={{
                                    width: '3rem',
                                    height: '3rem',
                                }}
                                src={IconoPintura}
                                alt="Icono Pintura"
                            />
                        </Avatar>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                marginTop: '15px',
                                fontSize: '1.25rem',
                            }}
                        >
                            Pintura
                        </Typography>
                        <Typography
                            sx={{ marginTop: '1rem', fontWeight: '300' }}
                        >
                            Realizo todo tipo de trabajos de pintura de casas,
                            tanto interiores como exteriores.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                    }}
                >
                    <Paper
                        sx={{ width: '100%', height: '100%', padding: '1rem' }}
                    >
                        <Avatar
                            sx={{
                                backgroundColor: 'primary.main',
                                width: '4rem',
                                height: '4rem',
                            }}
                        >
                            <img
                                style={{
                                    width: '3rem',
                                    height: '3rem',
                                }}
                                src={IconoPisos}
                                alt="Icono Pisos"
                            />
                        </Avatar>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                marginTop: '15px',
                                fontSize: '1.25rem',
                            }}
                        >
                            Pisos
                        </Typography>
                        <Typography
                            sx={{ marginTop: '1rem', fontWeight: '300' }}
                        >
                            Realizo todo tipo de trabajos de instalación y
                            reparación de suelos, tanto de madera, cerámica,
                            vinilo, como de otros materiales.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export { Servicios }
