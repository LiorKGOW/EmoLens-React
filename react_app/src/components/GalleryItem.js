import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const GalleryItem = (props) => {
  const {
    card: { id, title, description, image },
  } = props;

  const [isRaised, setIsRaised] = useState(false);

  const handleMouseOverToggleRaised = () => {
    setIsRaised(!isRaised);
  };

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        raised={isRaised}
        onMouseEnter={handleMouseOverToggleRaised}
        onMouseLeave={handleMouseOverToggleRaised}
      >
        <CardMedia
          sx={{
            height: 200,
          }}
          image={image}
          title={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GalleryItem;
