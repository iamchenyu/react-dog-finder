import React, { useState } from "react";
import whiskey from "./images/whiskey.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";
import Nav from "./Nav";
import DogRoutes from "./DogRoutes";
import DogContext from "./DogContext";

function App({ dogs }) {
  const [dogName, setDogName] = useState(null);

  const chooseDog = (dog) => {
    setDogName(dog);
  };

  const dog = dogs.find((dog) => dog.name === dogName);

  return (
    <DogContext.Provider value={{ dog, dogs, chooseDog }}>
      <Nav />
      <DogRoutes />
    </DogContext.Provider>
  );
}

App.defaultProps = {
  dogs: [
    {
      id: 1,
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      id: 2,
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      id: 3,
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      id: 4,
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
