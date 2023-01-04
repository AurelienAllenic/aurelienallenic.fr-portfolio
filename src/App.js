import './App.css';
import Home from "./components/home/Home"
import About from './components/about/About';
import { Parallax } from 'react-parallax';
import test from "./assets/test.jpg"
function App() {
  return (
    <div className="App">

        <Home/>
        <Parallax  bgImage={test} strength={500}>
        <About/>
        </Parallax>
        
    </div>
  );
}

export default App;
