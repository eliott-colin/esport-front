import { useState } from "react";
import "./home.css";
import Events from "../events/events.jsx";
import UniversitiesList from "../UniversitiesList/universities.jsx";
import Spacer from "../Spacer/spacer.jsx";
import Button from '../Button/button.jsx';

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
     <Button data={{text: "Voir plus", color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)", colorFont: "#FFFFFF", fontSize: "16px" }} />
    </>
  );
}

export default Home;
