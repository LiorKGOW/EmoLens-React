import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Spinner } from "@patternfly/react-core";

import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  const { cards, isLoading } = props;

  const isCardsNotEmpty = cards.length > 0;

  return (
    <Container sx={{ py: 5 }} maxWidth="md" className="card-gallery">
      <Grid container spacing={4}>
        {isLoading ? (
          <>
            <Typography>Loading...</Typography>
            <Spinner isInline />
          </>
        ) : isCardsNotEmpty ? (
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
