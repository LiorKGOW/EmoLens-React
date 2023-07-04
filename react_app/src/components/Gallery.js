import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  const { cards } = props;

  const isCardsEmpty = cards.length > 0;

  // todo: add card click handler
  const handleAddCardClick = () => {};

  return (
    <Container sx={{ py: 5 }} maxWidth="md" className="card-gallery">
      <Grid container spacing={4}>
        {isCardsEmpty ? (
          cards.map((card) => <GalleryItem card={card} />)
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
      <Button size="large" onClick={handleAddCardClick} id="add-card-button">
        Add Card
      </Button>
    </Container>
  );
};

export default Gallery;
