// App.js
import React,{useEffect} from "react";
import Navbar from './components/Navbar';
import Hitler from './components/Hitler';
import EarlyLife from './components/EarlyLife';
import RiseToPower from './components/RiseToPower';
import Dictator from './components/Dictator';
import WorldWar2 from './components/WorldWar2';
import Death from './components/Death';
import Footer from './components/Footer';
import "./App.css";
import Aos from "aos"
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  return (
    <div className="App" data-aos="zoom-in">
      <Navbar/>
      <Hitler/>
      <hr></hr>
      <EarlyLife/> 
      <hr></hr>   
      <RiseToPower/>
      <hr></hr>
      <Dictator/>
      <hr></hr>
      <WorldWar2/>
      <hr></hr>
      <Death/>
      <Footer/>
    </div>
  );
}

export default App;
