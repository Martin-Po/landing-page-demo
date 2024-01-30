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
import TrabajoEntrada from '../assets/trabajos/thumbnails/Entrada_despues.jpg'
import TrabajoCocina from '../assets/trabajos/thumbnails/cocina_después.jpg'
import TrabajoPintura from '../assets/trabajos/thumbnails/pintura_despues.jpg'
import TrabajoRemodelacion from '../assets/trabajos/thumbnails/remodelacion_despues.png'

const imagenesTrabajos = {
    TrabajoEntrada,
    TrabajoCocina,
    TrabajoPintura,
    TrabajoRemodelacion,
}

const trabajos = [
    {
        id: 1,
        title: 'Remodelacion entrada',
        thumbnail: 'TrabajoEntrada',
        text: 'Emprolijamiento del patio, instalación de piedra partida en la entrada y  pintada pared medianera .',
    },
    {
        id: 2,
        title: 'Instalacion cocina',
        thumbnail: 'TrabajoCocina',
        text: 'Preparación e instalació de pisos y paredes de cocina, preparado y presentación de mueble bajo mesada para instalación',
    },
    {
        id: 3,
        title: 'Pintura exterior',
        thumbnail: 'TrabajoPintura',
        text: 'Pintado completo de exterior de casa, barnizado y emprolijamiento de deck de madera',
    },
    {
        id: 4,
        title: 'Emprolijamiento entrada',
        thumbnail: 'TrabajoRemodelacion',
        text: 'Finalización de detalles en la obra y pintada externa del domicilio.',
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
                    const imgTrabajo = imagenesTrabajos[trabajo.thumbnail]

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
                                paddingTop: '1rem',
                                paddingBottom: '1rem',
                            }}
                        >
                            <Card sx={{ maxWidth: '80%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        loading="lazy"
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
