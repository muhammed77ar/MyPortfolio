import { BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./pages/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"
import Works from "./components/Works"
import ContactMe from "./components/ContactMe"


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
