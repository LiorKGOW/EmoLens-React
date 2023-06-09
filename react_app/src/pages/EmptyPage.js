import NavBar from "../components/NavBar";
import { Typography } from "@mui/material";

const EmptyPage = () => {
  return (
    <>
      <NavBar />
      <Typography variant="h3" gutterBottom align="center">
        Unfortunately, this page is empty for now...
      </Typography>

      <Typography variant="body1" gutterBottom align="center">
        It would be added in the future !
      </Typography>
    </>
  );
};

export default EmptyPage;
