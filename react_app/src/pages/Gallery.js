import React from "react";
import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";

const Gallery = () => (
  <>
    <NavBar />
    <Typography variant="h3" gutterBottom align="center">
      Welcome to the Gallery Page !
    </Typography>

    <Typography variant="body1" gutterBottom align="center">
      Here you can see all your images
    </Typography>
  </>
);

export default Gallery;
