import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Button, Grid, MobileStepper, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { useTheme } from '@emotion/react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 150,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 383,
        display: 'block',
        maxWidth: 600,
        overflow: 'hidden',
        width: '100%',
    },
}))

function Carousel({ images }) {
    const classes = useStyles()
    const theme = useTheme()
    const [activeStep, setActiveStep] = React.useState(0)
    const maxSteps = images.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleStepChange = (step) => {
        setActiveStep(step)
    }

    const route = process.env.PUBLIC_URL + '/images/'

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={500000}
                autoPlay={false}
            >
                {images.map((step, index) => (
                    <div key={step.label + index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img
                                className={classes.img}
                                src={route + step.path}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <Paper elevation={0} className={classes.header}>
                <Grid container direction="column" alignItems="center">
                    <Typography variant="h4" gutterBottom>
                        {images[activeStep].label}
                    </Typography>
                    <Grid
                        container
                        justify="center"
                        style={{ padding: '0px 24px 0px 24px' }}
                    >
                        <Typography variant="body1">
                            {images[activeStep].description}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button sx={{color:'black'}}
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeftIcon />
                        ) : (
                            <KeyboardArrowRightIcon />
                        )}
                    </Button>
                }
                backButton={
                    <Button sx={{color:'black'}}
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRightIcon />
                        ) : (
                            <KeyboardArrowLeftIcon />
                        )}
                        Back
                    </Button>
                }
            />
        </div>
    )
}

export default Carousel
