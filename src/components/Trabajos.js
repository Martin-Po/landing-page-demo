import { Grid, Typography } from '@mui/material'
import { WorkCard } from './WorkCard'

const trabajos = [
    {
        id: 1,
        title: 'Remodelacion entrada',
        thumbnail: 'TrabajoEntrada',
        images: [
            {
                label: 'Remodelacion entrada',
                description:
                    'Emprolijamiento del patio, instalación de piedra partida en la entrada y  pintada pared medianera.',
                path: 'Entrada_despues.jpg',
            },
        ],
        text: 'Emprolijamiento del patio, instalación de piedra partida en la entrada y  pintada pared medianera.',
    },
    {
        id: 2,
        title: 'Instalacion cocina',
        thumbnail: 'TrabajoCocina',
        images: [
            {
                label: 'Instalacion cocina',
                description:
                    'Preparación e instalació de pisos y paredes de cocina, preparado y presentación de mueble bajo mesada para instalación.',
                path: 'cocina_despues.jpg',
            },
        ],
        text: 'Preparación e instalació de pisos y paredes de cocina, preparado y presentación de mueble bajo mesada para instalación',
    },
    {
        id: 3,
        title: 'Pintura exterior',
        thumbnail: 'TrabajoPintura',
        images: [
            {
                label: 'Pintura exterior',
                description: 'Pintado completo de exterior de casa',
                path: 'pintura_antes.jpg',
            },
            {
                label: 'Pintura exterior',
                description: 'Pintado completo de exterior de casa.',
                path: 'pintura_despues.jpg',
            },
            {
                label: 'Pintura exterior',
                description: 'Barnizado y emprolijamiento de deck de madera.',
                path: 'deck.jpg',
            },
        ],
        text: 'Pintado completo de exterior de casa, barnizado y emprolijamiento de deck de madera',
    },
    {
        id: 4,
        title: 'Emprolijamiento entrada',
        thumbnail: 'TrabajoRemodelacion',
        images: [
            {
                label: 'Emprolijamiento entrada',
                description:
                    'Finalización de detalles en la obra y pintada externa del domicilio.',
                path: 'remodelacion_antes.png',
            },
            {
                label: 'Emprolijamiento entrada',
                description:
                    'Finalización de detalles en la obra y pintada externa del domicilio.',
                path: 'remodelacion_despues.png',
            },
        ],
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
                    return <WorkCard trabajo={trabajo} />
                })}
            </Grid>
        </>
    )
}

export { Trabajos }
