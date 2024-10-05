import { BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { lazy } from "react";

// Lazy load components
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const ContactMe = lazy(() => import('./components/ContactMe'));


function App() {
  return (
    <>
    <BrowserRouter>
      <div className=" relative z-0 bg-bg-pattern bg-cover bg-no-repeat bg-top">
        <div className=" bg-[url('/src/assets/HeroImage.png')] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <ContactMe />
        <div>
        </div>
      </div>
    </BrowserRouter>
    
 
    </>
  )
}

export default App
