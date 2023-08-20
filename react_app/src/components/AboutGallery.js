import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import AboutGalleryItem from "./AboutGalleryItem";

const AboutGallery = (props) => {
  const { aboutCards } = props;

  const isAboutCardsNotEmpty = aboutCards.length > 0;

  return (
    <Container sx={{ py: 5 }} maxWidth="md" className="about-gallery">
      <Grid container spacing={4}>
        {isAboutCardsNotEmpty ? (
          aboutCards.map((aboutCard) => (
            <AboutGalleryItem key={aboutCard.id} aboutCard={aboutCard} />
          ))
        ) : (
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            No about cards to show
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default AboutGallery;
