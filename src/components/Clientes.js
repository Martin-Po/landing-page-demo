import { Avatar, Grid, Paper, Typography } from '@mui/material'
import ClientesImage from '../assets/testimony_images.png'
import ClientAvatar1 from '../assets/testimonial_avatar_1.png'
import ClientAvatar2 from '../assets/testimonial_avatar_2.png'
import ClientAvatar3 from '../assets/testimonial_avatar_3.png'


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
                }}
            >
                <img
                    style={{
                        width: '100%',
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
                    container direction= 'column'
                    spacing={1}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Grid
                        item
                        xs={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
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
                            <Grid container >
                                <Grid
                                    item
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center', 
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
                                            src={ClientAvatar1}
                                            alt="Icono Carpintería"
                                        />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={9} sx={{display: 'flex', flexDirection:'column' }}>
                                    <Typography sx={{ fontSize: '0.85rem' }}>
                                        Estoy muy satisfecho con el trabajo que
                                        hizo Walter en mi casa. Me pintó las
                                        paredes, arregló el techo y me instaló
                                        una nueva puerta. Todo quedó impecable y
                                        en poco tiempo. Lo recomiendo 100%.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            placeSelf: 'flex-end',
                                        }}
                                    >
                                        Marta Gómez
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
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
                            <Grid container >
                                <Grid
                                    item
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
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
                                            src={ClientAvatar2}
                                            alt="Icono Carpintería"
                                        />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={9} sx={{ display: 'flex', flexDirection:'column' }}>
                                    <Typography sx={{ fontSize: '0.85rem' }}>
                                    Walter es un profesional de primera. Me hizo una reforma integral de mi baño y quedó espectacular. Además, me asesoró sobre los mejores materiales y me dio un presupuesto muy razonable. Sin duda, volveré a contratarlo para futuros proyectos.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            placeSelf: 'flex-end',
                                        }}
                                    >
                                        Carlos Pérez
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
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
                            <Grid container >
                                <Grid
                                    item
                                    xs={3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
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
                                            src={ClientAvatar3}
                                            alt="Icono Carpintería"
                                        />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={9} sx={{ display: 'flex', flexDirection:'column' }}>
                                    <Typography sx={{ fontSize: '0.85rem' }}>
                                    No hay nada que Walter no pueda hacer. Me solucionó varios problemas de mantenimiento en mi oficina. Tiene mucha experiencia y se nota en la calidad de su trabajo. 
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            placeSelf: 'flex-end',
                                        }}
                                    >
                                        Lucía Rodríguez
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export { Clientes }
