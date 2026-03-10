import React from "react";
import Title from "../../components/Title/title.jsx";
import UniversitiesContainer from "../../components/UniversitiesContainer/universitiesContainer.jsx";

const MOCK_UNIVERSITIES = [
  { id: 1, name: "Université de Bordeaux", image: "lol1.png", ville: "Bordeaux", postalCode: "33000" },
  { id: 2, name: "Université de Paris", image: "lol2.png", ville: "Paris", postalCode: "75005" },
  { id: 3, name: "Université de Lyon", image: "lol1.png", ville: "Lyon", postalCode: "69001" },
  { id: 4, name: "Université de Lille", image: "lol2.png", ville: "Lille", postalCode: "59000" },
  { id: 5, name: "Université de Toulouse", image: "lol1.png", ville: "Toulouse", postalCode: "31000" },
  { id: 6, name: "Université de Marseille", image: "lol2.png", ville: "Marseille", postalCode: "13001" },
  { id: 7, name: "Université de Nantes", image: "lol1.png", ville: "Nantes", postalCode: "44000" },
  { id: 8, name: "Université de Strasbourg", image: "lol2.png", ville: "Strasbourg", postalCode: "67000" },
  { id: 9, name: "Université de Rennes", image: "lol1.png", ville: "Rennes", postalCode: "35000" },
  { id: 10, name: "Université de Montpellier", image: "lol2.png", ville: "Montpellier", postalCode: "34000" },
  { id: 11, name: "Université de Nice", image: "lol1.png", ville: "Nice", postalCode: "06000" },
  { id: 12, name: "Université de Grenoble", image: "lol2.png", ville: "Grenoble", postalCode: "38000" },
];

function UniversitiesPage() {
  return (
    <div className="navBarSpace">
      <Title
        title="UNIVERSITÉS"
        color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
        colorFont="#FFFFFF00"
        fontSize="24px"
        arrow={false}
      />
      <UniversitiesContainer data={MOCK_UNIVERSITIES} />
    </div>
  );
}

export default UniversitiesPage;

