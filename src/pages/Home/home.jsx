import { useState } from "react";
import "./home.css";
import Events from "../../components/Events/events.jsx";
import UniversitiesList from "../../components/UniversitiesList/universities.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import Button from "../../components/Button/button.jsx";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="navBarSpace">
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
      <Button
        data={{
          text: "Voir plus",
          color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)",
          colorFont: "#FFFFFF",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default Home;
