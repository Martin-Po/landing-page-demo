import { Avatar, Grid, Paper, Typography } from '@mui/material'
import ClientesImage from '../assets/testimony_images.png'
import ClientAvatar1 from '../assets/testimonial_avatar_1.png'
import ClientAvatar2 from '../assets/testimonial_avatar_2.png'
import ClientAvatar3 from '../assets/testimonial_avatar_3.png'

const AvatarImgs = {
    ClientAvatar1,
    ClientAvatar2,
    ClientAvatar3,
    
}

const testimonios = [
    {
        id: 1,
        avatar: 'ClientAvatar1',
        text: 'Estoy muy satisfecho con el trabajo que hizo Walter en mi casa. Me pintó las paredes, arregló el techo y me instaló una nueva puerta. Todo quedó impecable y en poco tiempo. Lo recomiendo 100%.',
        name: 'Marta Gómez',
    },
    {
        id: 2,
        avatar: 'ClientAvatar2',
        text: 'Walter es un profesional de primera. Me hizo una reforma integral de mi baño y quedó espectacular. Además, me asesoró sobre los mejores materiales y me dio un presupuesto muy razonable. Sin duda, volveré a contratarlo para futuros proyectos.',
        name: 'Carlos Pérez',
    },
    {
        id: 3,
        avatar: 'ClientAvatar3',
        text: 'No hay nada que Walter no pueda hacer. Me solucionó varios problemas de mantenimiento en mi oficina. Tiene mucha experiencia y se nota en la calidad de su trabajo.',
        name: 'Lucía Rodríguez',
    },
]

const Clientes = () => {

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
                    ¿QUE OPINAN MIS CLIENTES?
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '@media (max-width:500px)': {
                        marginBottom: '70px',
                    },
                }}
            >
                <img
                    style={{
                        width: '100%',
                        maxWidth: '471px',
                        maxHeight: '471px',
                    }}
                    src={ClientesImage}
                    alt="Testimonial"
                />
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
                <Grid
                    container
                    direction="column"
                    spacing={1}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    {testimonios.map((testimonio) => {
                        const AvatarImg = AvatarImgs[testimonio.avatar]
                        return (
                            <Grid
                        item
                        xs={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', '@media (max-width:500px)': {
                                marginBottom: '40px',
                            },
                        }}
                    >
                        <Paper
                            sx={{
                                width: '100%',
                                padding: '1rem',
                                margin: '10px',
                                borderRadius: '30px',
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    '@media (max-width:500px)': {
                                        flexDirection: 'column',
                                    },
                                }}
                            >
                                <Grid
                                    item
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                        '@media (max-width:500px)': {
                                            alignSelf: 'center',
                                            marginTop: '-64px',
                                        },
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            width: '5.5rem',
                                            height: '5.5rem',
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: '5.5rem',
                                                height: '5.5rem',
                                            }}
                                            src={AvatarImg}
                                            alt="Icono Carpintería"
                                        />
                                    </Avatar>
                                </Grid>
                                <Grid
                                    item
                                    xs={9}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '@media (max-width:500px)': {
                                            maxWidth: '100%',
                                        },
                                    }}
                                >
                                    <Typography sx={{ fontSize: '0.85rem' }}>
                                        {testimonio.text}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            placeSelf: 'flex-end',
                                        }}
                                    >
                                        {testimonio.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                        )   
                            

                    })}
                    
                </Grid>
            </Grid>
        </>
    )
}
export { Clientes }
