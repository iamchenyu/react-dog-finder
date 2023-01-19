import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import DogContext from "./DogContext";

const Dogs = () => {
  const { dogs, chooseDog } = useContext(DogContext);

  const sxListText = {
    color: "black",
    textDecoration: "none",
  };
  const sxPageTitle = {
    my: "20px",
    marginLeft: "15px",
  };

  return (
    <>
      <Typography variant="h3" sx={sxPageTitle}>
        Dog Finder
      </Typography>
      <List>
        {dogs.map((dog) => (
          <Link
            to={`/dog/${dog.name.toLowerCase()}`}
            style={sxListText}
            key={dog.id}
            onClick={() => chooseDog(dog.name)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <Typography variant="h6">🐕 {dog.name}</Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Dogs;
