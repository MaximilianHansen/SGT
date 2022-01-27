import './leadGen.css'
import bottle from '../../img/bottle.png'
import React, {useState} from 'react'

function LeadGen({isLeadGen}=this.props) { 
    
    const [route, setRoute] = useState(1)

    const leadGenClick = () => {
        setRoute(route+1)
    }

    return (
       
           
            <div id='leadGenWrapper'>
                <div style={{display: "flex", flexDirection:'row', justifyContent:"flex-end", width:'98%'}}>
                    <p onClick={isLeadGen} style={{cursor:"pointer"}}id="exit">X</p>
                </div>
                <h1 id="topHeader">Lets get started</h1>
                {route === 1 ? 
                <div id="routeChanger">
                <h2>How would you describe your currrent fitness level?</h2>
                <button onClick={leadGenClick}>Begginer</button>
                <button onClick={leadGenClick}>Intermediate</button>
                <button onClick={leadGenClick}>Advanced</button>
                </div>
                : route === 2 ? 
                <div id="routeChanger" >
                <h2>What is your prefered time to workout?</h2>
                <button onClick={leadGenClick}>Morning</button>
                <button onClick={leadGenClick}>Afternoon</button>
                <button onClick={leadGenClick}>Evening</button>
                </div>
                : 
                <div id="routeChanger">
                <h2>Give us your name and number and well get you scheduled</h2>
                <input placeholder='Joe Smith'></input>
                <input placeholder='(860)-867-5309'></input>
                <button id="lastSlideBtn" onClick={leadGenClick}>Get Started</button>
                </div>
                }
                
               
                <div style={{display: "flex", flexDirection:'row', alignSelf:"flex-end", justifyContent:"flex-end", width:'95%'}}>
                     <img src={bottle} /> 
                </div>
              
            </div>
     
        
    );
  }
  
  export default LeadGen;