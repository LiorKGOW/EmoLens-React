import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const GalleryItem = (props) => {
  const {
    card: { id, title, description, image },
  } = props;

  // const img = require(`${image}`);

  // todo: handle view and edit card clicks
  const handleViewCardClick = () => {};
  const handleEditCardClick = () => {};

  // todo: add card delete icon & handler

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
        {/* <img
            src={require(image)}
          /> */}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleViewCardClick}>
            View
          </Button>
          <Button size="small" variant="outlined" onClick={handleEditCardClick}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GalleryItem;
