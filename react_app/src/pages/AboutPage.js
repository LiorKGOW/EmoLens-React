import React, { useState } from "react";
import { Typography, Container } from "@mui/material";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutGallery from "../components/AboutGallery";
import { aboutUsCards } from "../resources/about/AboutUsData";

const AboutPage = () => {

  const [aboutCards, setAboutCards] = useState(aboutUsCards);

  return (
    <div className="about-page">
      <NavBar />

      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          The team behind this project
        </Typography>
      </Container>

      <AboutGallery aboutCards={aboutCards} />

      <Footer />
    </div>
  );
};

export default AboutPage;
