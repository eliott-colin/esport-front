import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/events/events'
import UniversitiesList from "./components/UniversitiesList/universities.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Events />
      <UniversitiesList universities={[{name: "lol", image: "lol1.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}, {name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330},{name: "lol2", image: "lol2.png", ville: "Bordeaux", postalCode: 33330}]} />
    </>
  )
}

export default App
