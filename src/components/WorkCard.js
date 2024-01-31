import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material'
import TrabajoEntrada from '../assets/trabajos/thumbnails/Entrada_despues.jpg'
import TrabajoCocina from '../assets/trabajos/thumbnails/cocina_después.jpg'
import TrabajoPintura from '../assets/trabajos/thumbnails/pintura_despues.jpg'
import TrabajoRemodelacion from '../assets/trabajos/thumbnails/remodelacion_despues.png'
import React, { useState } from "react";
import ImagesCarousel from './ImagesCarousel'


const imagenesTrabajos = {
    TrabajoEntrada,
    TrabajoCocina,
    TrabajoPintura,
    TrabajoRemodelacion,
}

const WorkCard = ({trabajo}) => {
  const [open, setOpen] = useState(false);

    const imgTrabajo = imagenesTrabajos[trabajo.thumbnail]

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
    setOpen(false);
    };

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
             <ImagesCarousel
                open={open}
                setOpen={setOpen}
                images={trabajo.images}
                handleClose={handleClose}
              />
            <Card sx={{ width: '80%', height:'100%' }}>
                <CardActionArea onClick={handleClickOpen}>
                    <CardMedia
                        component="img"
                        loading="lazy"
                        height="140"
                        image={imgTrabajo}
                        alt={imgTrabajo}
                    />
                </CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {trabajo.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {trabajo.text}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export { WorkCard }
