import { Button, Grid, Typography } from '@mui/material'

const ContactButtons = [{
    id: 1,
    text: 'Quiero realizar una reforma en mi casa'

},{
    id: 2,
    text: 'Quiero pintar el experior de mi casa'

},{
    id: 3,
    text: '¿Qué otros tipo de trabajos realizas?'

},]

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
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        '@media (max-width:600px)': {
                            marginLeft: '0px',
                            marginRight: '0px',
                            fontSize: '1.25rem',
                        },
                    }}
                >
                    ¿QUERÉS REALIZAR UNA REFOMA EN TU CASA?
                </Typography>
                <Typography
                    sx={{
                        marginTop: '1rem',
                        fontWeight: '300',
                        fontSize: '1.25rem','@media (max-width:600px)': {
                            fontSize:'1rem'
                        },
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
                    {ContactButtons.map((ContactButton => {return (
                        <Grid
                        item
                        key={ContactButton.id}
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
                                width: '100%',
                                maxWidth: '405px',
                                '@media (max-width:600px)': {  paddingLeft: '1rem',
                                paddingRight: '1rem', }
                                
                            }}
                            variant="contained"
                        >
                            <Typography
                                sx={{
                                    color: 'secondary.contrastText',
                                    fontWeight: 'bold',
                            '@media (max-width:500px)': { fontSize: '0.7rem' },

                                }}
                            >
                                {ContactButton.text}
                            </Typography>
                        </Button>
                    </Grid>
                    )}))}
                </Grid>
            </Grid>
        </>
    )
}

export { Contacto }
