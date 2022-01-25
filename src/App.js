import './App.css';
import React, {useState, useEffect} from 'react';

import Header from './components/Header/Header.js';
import CTA from './components/CTA/CTA.js';
import King from './components/King/King';
import About from './components/About/About'
import Phone from './components/Phone/Phone'


function App() {

  const [isMobile, setIsmobile] = useState()


useEffect(()=>{  
  
  window.addEventListener('resize', resize);
    function resize() {
    if (window.innerWidth < 700) {
        setIsmobile(true)
        console.log(isMobile);
        // window.removeEventListener('resize', resize); // once
        }
      else {setIsmobile(false); console.log(isMobile)}
    };

})


  return (
    <div className="App">
      <div style={{ width:"100vw", display:"flex", alignItems:"center", flexDirection:'column'}}>
        <Header isMobile={isMobile}/>
        <CTA />
        <King />
    
        <Phone />
      </div>
    </div>
  );
}

export default App;
