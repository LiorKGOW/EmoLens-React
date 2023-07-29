import React from "react";
import { Typography, Container } from "@mui/material";

import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";

import { cards } from "../resources/Mock Data/mockData";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <NavBar />

      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Gallery Page
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Here you can view all the people you have met
        </Typography>
      </Container>

      <Gallery cards={cards} />
    </div>
  );
};

export default GalleryPage;
