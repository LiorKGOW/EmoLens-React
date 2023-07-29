import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Typography, Container } from "@mui/material";

import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const GalleryPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (setCards) => {
    const response = await Axios.get(
      "https://emo-lens-default-rtdb.europe-west1.firebasedatabase.app/images.json"
    );
    
    setCards(formatData(response.data));

    setIsLoading(false);

    const numOfCards = Object.keys(response.data).length;
    console.log(`Fetched ${numOfCards} cards from the server`);
  };

  const formatData = (data) => {

    const formattedData = [];

    for (let key in data) {
      
      // emotion:
      const emotion = data[key].emotion;
      const emotionCapitalized = emotion.charAt(0).toUpperCase() + emotion.slice(1);

      // gender: 
      const gender = data[key].gender;
      const genderCapitalized = gender.charAt(0).toUpperCase() + gender.slice(1);

      // date:
      const timestamp = parseInt(data[key].timestamp);
      const date = new Date(timestamp);

      formattedData.push({
        id: key,
        title: `${emotionCapitalized} ${genderCapitalized}`,
        description: `Age: ${data[key].age}, Date: ${date}`,
        image: data[key].url,
      });
    }

    return formattedData;
  };

  // fetch data from the server when the component is mounted
  useEffect(() => {
    fetchData(setCards);
  }, []);

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

      <Gallery cards={cards} isLoading={isLoading} />

      <Footer />
    </div>
  );
};

export default GalleryPage;
