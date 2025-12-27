import { Navbar } from "./assets/Navbar/Navbar.jsx";
import { Hero } from "./assets/Hero/Hero.jsx";
import Fyp from "./assets/Fyp/Fyp.jsx";
import Tools from "./assets/Tools/Tools.jsx"
import Education from "./assets/Education/Education.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Fyp/>
      <Tools/>
      <Education/>
      <Analytics />
    </>
  )
}

export default App;