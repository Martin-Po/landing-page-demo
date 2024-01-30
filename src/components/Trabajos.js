import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from '@mui/material'
import HeroImage from '../assets/hero_image.png'
import Avatar from '@mui/material/Avatar'
import TrabajoEntrada from '../assets/trabajos/finales/Entrada_despues.jpg'
import TrabajoCocina from '../assets/trabajos/finales/cocina_después.jpg'
import TrabajoPintura from '../assets/trabajos/finales/pintura_despues.jpg'
import TrabajoRemodelacion from '../assets/trabajos/finales/remodelacion_despues.png'

const imagenesTrabajos = {
    TrabajoEntrada,
    TrabajoCocina,
    TrabajoPintura,
    TrabajoRemodelacion,
}

const trabajos = [
    {
        id: 1,
        title: 'Trabajo Entrada',
        img: 'TrabajoEntrada',
        text: 'Realizo todo tipo de trabajos de carpintería, desde pequeñas reparaciones hasta grandes proyectos.',
    },
    {
        id: 2,
        title: 'Trabajo Cocina',
        img: 'TrabajoCocina',
        text: 'Ofrezco servicios de electricidad básicos, como instalaciones, reparaciones, mantenimiento, y conexiones eléctricas.',
    },
    {
        id: 3,
        title: 'Trabajo Pintura',
        img: 'TrabajoPintura',
        text: 'Realizo todo tipo de trabajos de pintura de casas, tanto interiores como exteriores.',
    },
    {
        id: 4,
        title: 'Trabajo Remodelacion',
        img: 'TrabajoRemodelacion',
        text: 'Realizo todo tipo de trabajos de instalación y reparación de suelos, tanto de madera, cerámica, vinilo, como de otros materiales.',
    },
]

const Trabajos = () => {
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
                        '@media (max-width:600px)': {
                            marginLeft: '0px',
                            marginRight: '0px',
                            fontSize: '1.25rem',
                        },
                    }}
                >
                    MIRA ALGUNOS DE MIS TRABAJOS
                </Typography>
            </Grid>

            <Grid
                container
                spacing={1}
                sx={{ display: 'flex', marginBottom: '20px' }}
            >
                {trabajos.map((trabajo) => {
                    const imgTrabajo = imagenesTrabajos[trabajo.img]

                    return (
                        <Grid
                            item
                            key={trabajo.id}
                            xs={12}
                            sm={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingTop:'1rem',
                                paddingBottom:'1rem'
                            }}
                        >
                            <Card sx={{ maxWidth: '80%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={imgTrabajo}
                                        alt={imgTrabajo}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {trabajo.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                           {trabajo.text}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export { Trabajos }
