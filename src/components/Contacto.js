import { Button, Grid, Typography } from '@mui/material'

const Contacto = () => {
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
                <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                    ¿QUERÉS REALIZAR UNA REFOMA EN TU CASA?
                </Typography>
                <Typography
                    sx={{
                        marginTop: '1rem',
                        fontWeight: '300',
                        fontSize: '1.25rem',
                    }}
                >
                    Si tenés un proyecto en mente y querés hacerlo realidad, no
                    dudes en ponerte en contacto conmigo. Te voy a brindar una
                    asesoría personalizada y profesional. No dejes pasar esta
                    oportunidad de contar con un contratista de confianza y
                    experiencia. Llámame o escríbeme hoy mismo y empecemos a
                    trabajar juntos
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
                <Grid
                    container
                    direction="column"
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
                            width:'100%',
                            maxWidth:'405px'
                        }}
                        variant="contained"
                    >
                        <Typography
                            sx={{
                                color: 'secondary.contrastText',
                                fontWeight: 'bold',
                            }}
                        >
                            Quiero realizar una reforma en mi casa
                        </Typography>
                    </Button>

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
                            width:'100%',
                            maxWidth:'405px'
                        }}
                        variant="contained"
                    >
                        <Typography
                            sx={{
                                color: 'secondary.contrastText',
                                fontWeight: 'bold',
                            }}
                        >
                            Quiero pintar el exterior de mi casa
                        </Typography>
                    </Button>

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
                            width:'100%',
                            maxWidth:'405px'
                        }}
                        variant="contained"
                    >
                        <Typography
                            sx={{
                                color: 'secondary.contrastText',
                                fontWeight: 'bold',
                            }}
                        >
                            ¿Qué otros tipo de trabajos realizas?
                        </Typography>
                    </Button>

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export { Contacto }
