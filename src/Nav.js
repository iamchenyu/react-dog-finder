import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import dogContext from "./DogContext";

const Nav = () => {
  const { dogs, chooseDog } = useContext(dogContext);

  const sxMenuBar = {
    justifyContent: "center",
    gap: "5rem",
  };

  const sxMenu = {
    color: "rgba(255,255,255,0.5)",
    textDecoration: "none",
  };

  const sxMenuActive = {
    color: "white",
    textDecoration: "none",
    fontStyle: "italic",
  };

  return (
    <Box componen="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={sxMenuBar}>
          <NavLink
            to="/dogs"
            style={({ isActive }) => (isActive ? sxMenuActive : sxMenu)}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
              Home
            </Typography>
          </NavLink>
          {dogs.map((dog) => {
            return (
              <NavLink
                key={dog.id}
                to={`/dog/${dog.name.toLowerCase()}`}
                style={({ isActive }) => (isActive ? sxMenuActive : sxMenu)}
                onClick={() => chooseDog(dog.name)}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
                  {dog.name}
                </Typography>
              </NavLink>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
