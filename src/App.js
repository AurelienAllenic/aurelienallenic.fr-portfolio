import './App.css';
import { Parallax } from 'react-parallax';
import test from "./assets/test.jpg"
import Home from "./components/home/Home"
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Interests from './components/interests/Interests';
import Contact from './components/contact/Contact';
import Navbar from './components/nav/Nav';
import BarLoader from "react-spinners/BarLoader";
import {useState, useEffect} from "react"

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3500)
  }, [])

  return (
    <div className="App">
        {
        loading ?
        <div className="loader">
        <BarLoader
        loading={loading}
        size={800}
        width={200}
        color="#008ab3"
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      /></div>
      :<>
      <div className='animation-apparition'>
          <Home/>
          <Parallax  bgImage={test} strength={500}>
            <Navbar/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Interests/>
          </Parallax>
          <Contact/>
        </div>
        </>
}
    </div>
  );
}

export default App;
