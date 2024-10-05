import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Suspense, lazy } from "react";

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
          <Suspense fallback={
            <div className="w-full gap-x-2 flex justify-center items-center">
              <div
                className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
              ></div>
              <div
                className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
              ></div>
              <div
                className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
              ></div>
            </div>
          }>
            <About />
            <Experience />
            <Tech />
            <Works />
            <ContactMe />
          </Suspense>
          <div>
          </div>
        </div>
      </BrowserRouter>


    </>
  )
}

export default App
