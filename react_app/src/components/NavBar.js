import * as React from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';

import { pageNames } from "../pages/constants";
import { HOME_ROUTE, PROFILE_ROUTE, ABOUT_ROUTE } from "../RouteConstants";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (pageName) => {

    console.log("pageName: ", pageName);

    if(pageName == 'Gallery') {
      navigate(HOME_ROUTE);
    } else if(pageName == 'Profile') {
      navigate(PROFILE_ROUTE);
    } else if(pageName == 'About Us') {
      navigate(ABOUT_ROUTE);
    } else {
      console.log(`This page cannot be found: ${pageName}`);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={require("../resources/EmoLens_Logo.jpeg")}
            className="navbar-emolens-logo"
            alt="EmoLens Logo"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pageNames.map((pageName) => (
              <Button
                key={pageName}
                onClick={() => handleNavItemClick(pageName)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {pageName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
