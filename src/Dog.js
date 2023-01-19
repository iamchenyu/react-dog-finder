import { Box, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { Route, Navigate, Routes, Link } from "react-router-dom";
import "./Dog.css";
import DogContext from "./DogContext";

const Dog = () => {
  const { dog } = useContext(DogContext);
  const sxDogContainer = {
    margin: "20px",
    display: "flex",
    border: "0.6px solid black",
    justifyContent: "space-between",
    padding: "20px",
    width: "70%",
  };
  const sxPageTitle = {
    my: "30px",
    marginLeft: "25px",
  };
  const sxListText = {
    color: "black",
    textDecoration: "none",
  };
  return dog ? (
    <>
      <Typography variant="h4" sx={sxPageTitle}>
        Here's the puppy you are interested...
      </Typography>
      <Box sx={sxDogContainer} className="Dog">
        <Box>
          <Typography variant="h4">{dog.name}</Typography>
          <ul>
            <li>
              <strong>Age:</strong> {dog.age}
            </li>
            <li>
              <strong>Facts:</strong>
              <ul>
                {dog.facts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </li>
          </ul>
          <Link to="/dogs" style={sxListText}>
            <Button variant="contained">Go Back</Button>
          </Link>
        </Box>
        <img src={dog.src} alt={dog.name} />
      </Box>
    </>
  ) : (
    <Routes>
      <Route path="*" element={<Navigate to="/dogs" replace />} />
    </Routes>
  );
};

export default Dog;
