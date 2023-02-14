import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import Nav from './page/Nav';
import Arrow from './page/Arrow';
import Cards from './page/Cards';
import Contact from './page/Contact';




function App() {
  return (
    <div className="App">
    <Nav/>
    <Arrow />
    <Cards />
    <Fade direction='left'>  <Contact /> </Fade>
   
             
      
          <Fade direction='left'>  Learn React</Fade>
  
        <Button>Tesstlkj;lkj;lkj;lkj</Button>
     
    </div>
  );
}

export default App;
