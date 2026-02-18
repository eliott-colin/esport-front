import { useState } from "react";
import "./home.css";
import Events from "../events/events.jsx";
import UniversitiesList from "../UniversitiesList/universities.jsx";
import Spacer from "../Spacer/spacer.jsx";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Events />
      <Spacer size="30px" />
      <UniversitiesList
        universities={[
          {
            name: "lol",
            image: "lol1.png",
            ville: "Bordeaux",
            postalCode: 33330,
          },
          {
            name: "lol2",
            image: "lol2.png",
            ville: "Bordeaux",
            postalCode: 33330,
          },
          {
            name: "lol2",
            image: "lol2.png",
            ville: "Bordeaux",
            postalCode: 33330,
          },
          {
            name: "lol2",
            image: "lol2.png",
            ville: "Bordeaux",
            postalCode: 33330,
          },
          {
            name: "lol2",
            image: "lol2.png",
            ville: "Bordeaux",
            postalCode: 33330,
          },
          {
            name: "lol2",
            image: "lol2.png",
            ville: "Bordeaux",
            postalCode: 33330,
          },
          {
            name: "lol2",
            image: "lol2.png",
            ville: "Bordeaux",
            postalCode: 33330,
          },
        ]}
      />
    </>
  );
}

export default Home;
