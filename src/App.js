import './App.css';
import { Parallax } from 'react-parallax';
import test from "./assets/test.jpg"
import Home from "./components/home/Home"
import About from './components/about/About';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="App">

        <Home/>
        <Parallax  bgImage={test} strength={500}>
        <About/>
        <Experience/>
        </Parallax>
        
    </div>
  );
}

export default App;
