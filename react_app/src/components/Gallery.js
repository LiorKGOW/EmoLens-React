import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  const { cards } = props;

  const isCardsEmpty = cards.length > 0;

  return (
    <Container sx={{ py: 5 }} maxWidth="md" className="card-gallery">
      <Grid container spacing={4}>
        {isCardsEmpty ? (
          cards.map((card) => <GalleryItem key={card.id} card={card} />)
        ) : (
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            No cards to show
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Gallery;
