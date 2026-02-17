import {useState} from 'react'
import './App.css'
import Events from './components/events/events'
import UniversitiesList from "./components/UniversitiesList/universities.jsx";
import Navbar from "./components/NavBar/navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Events />
      <UniversitiesList universities={[{name: "lol", image: "lol1.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330},{name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}]} />
    </>
  )
}

export default App
