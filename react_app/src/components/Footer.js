import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" underline="hover" href="https://www.linkedin.com/in/lior-keren-6939101b8/">
        Lior Keren
      </Link>
      {" & "}
      <Link color="inherit" underline="hover" href="https://www.linkedin.com/in/guy-sternshos/">
        Guy Sternshos
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = () => (
  <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
    <Copyright />
  </Box>
);

export default Footer;
