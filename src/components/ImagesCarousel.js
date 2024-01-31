import React from "react";
import { DialogContent } from '@mui/material'
import Carousel from "./Carousel";
import { Dialog,  } from "@mui/material";
import { withStyles } from "@mui/styles";


const MuiDialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(DialogContent);

export default function TutorialCarousel({open, handleClose, images}) {
 

  return (
      <Dialog onClose={handleClose} open={open}>
        <MuiDialogContent style={{ padding: "0px" }}>
          <Carousel images={images} />
        </MuiDialogContent>
      </Dialog>
  );
}