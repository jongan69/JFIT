import React, { useState, useEffect, useRef } from "react";
import PageNavbar from "./components/Navbar";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./components/pages/Education";
import Nutrition from "./components/pages/Nutrition";
import Training from "./components/pages/Training";
import About from "./components/pages/About";
function App() {
  const [, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  // const location = useLocation();

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Router>
      <PageNavbar />
      <Routes>
        <Route
          path="/JFIT/Home"
          element={<Home />}
        />
        <Route
          path="/JFIT/Education"
          element={<Education />}
        />
        <Route
          path="/JFIT/Nutrition"
          element={<Nutrition />}
        />
        <Route
          path="/JFIT/Training"
          element={<Training />}
        />
        <Route
          path="/JFIT/About"
          element={<About />}
        />
      </Routes>
    </Router>
  );
}


export default App;
