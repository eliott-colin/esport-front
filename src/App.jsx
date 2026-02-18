import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/navbar.jsx";
import Burger from "./components/Burger/burger.jsx";
import Menu from "./components/Menu/menu.jsx";
import { useMediaQuery } from "react-responsive";

function App() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isUserOnMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    setIsMobile(isUserOnMobile);
  }, [isUserOnMobile]);
  return (
    <>
      {isMobile ? (
        <>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </>
      ) : (
        <Navbar />
      )}
      <Outlet />
    </>
  );
}

export default App;
