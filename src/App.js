import './App.css';
import React, {useState, useEffect} from 'react';

import Header from './components/Header/Header.js';
import CTA from './components/CTA/CTA.js';
import King from './components/King/King';
import Phone from './components/Phone/Phone';
import LeadGen from './components/LeadGen/LeadGen';


function App() {

  const [isMobile, setIsmobile] = useState(true);
  const [isLeadGen, setIsLeadGen] = useState(false);
  const [isHam, setIsHam] = useState(false)





useEffect(()=>{  
  if(window.innerWidth>700){setIsmobile(false)};

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

const hamburgFunc = () => {
  setIsHam(!isHam)
}

const leadGenSwitch = () => {
  console.log('clicked')
  setIsLeadGen(!isLeadGen);
  setIsHam(false);
}

const scrollTo = () => {
  var elmnt = document.getElementById("secWrap");
  elmnt.scrollIntoView({behavior: "smooth"});
}
  return (
    <div className="App">
      <div style={{ width:"100vw", display:"flex", alignItems:"center", flexDirection:'column'}}>
        <Header isMobile={isMobile} isLeadGen={leadGenSwitch} isHam={isHam} hamburgFunc={hamburgFunc} scrollTo= {scrollTo} />
            {!isLeadGen? 
              <>
                <CTA isLeadGen={leadGenSwitch}/>
                <King />
                <Phone />
              </>
              :
                <LeadGen isLeadGen={leadGenSwitch}/>
            }
      </div>
    </div>
  );
}

export default App;
