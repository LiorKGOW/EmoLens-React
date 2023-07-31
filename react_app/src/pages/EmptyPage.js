import { Container, Typography } from "@mui/material";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const EmptyPage = () => {
  return (
    <div className="empty-page">
      <NavBar />

      <Container maxWidth="sm" className="empty-page-content">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Unfortunately, this page is empty for now...
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          It will be added in the future !
        </Typography>
      </Container>

      <Footer />
    </div>
  );
};

export default EmptyPage;
