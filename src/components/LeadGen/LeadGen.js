import './leadGen.css'
import bottle from '../../img/bottle.png'
import React, {useEffect, useState} from 'react'

function LeadGen({isLeadGen}=this.props) { 
    
    const [route, setRoute] = useState(1)
    const [formEntries, setFormEntries] = useState(['form deets','beginner', 'morning', {name:"john", number:"8603675309"}])

    const inputs = (x) => {
        if(x.target.id === 'name') {
            let newArray = formEntries;
            newArray[route].name = x.target.value
            setFormEntries(newArray)
        }
        if(x.target.id === 'phone') {
            let newArray = formEntries;
            newArray[route].number = x.target.value
            setFormEntries(newArray)
        }
    }


    const leadGenClick = (x) => { 
            if(route < 3){
            let newArray = formEntries;
            newArray[route] = x.target.innerHTML; 
            setFormEntries(newArray);
            }
            if(route === 3){
                fetch('http://198.74.56.68:3000/email', {
                    method:"post", 
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                    "email": formEntries[1],
                    "fname": formEntries[2],
                    "lname": formEntries[3].name,
                    "body": formEntries[3].number})
                     })
                     .then(res => res.json())
                     .then((data) => { if(data === 'Email sent!') { console.log("true") } } )
                console.log(formEntries)
            }
        setRoute(route+1);   
    }             

        useEffect(()=> { 
      
        if(route < 4) {   
            let pgDot1 = document.getElementById("pageDot1") 
            let pgDot2 = document.getElementById("pageDot2") 
            let pgDot3 = document.getElementById("pageDot3")
            pgDot1.className = ""; pgDot2.className=""; pgDot3.className="";   let activePgDot = eval(`pgDot${route}`);
                activePgDot.className =  'active';
                }
        }, [route])

            

    return (
       
           
            <div id='leadGenWrapper'>
                <div style={{display: "flex", flexDirection:'row', justifyContent:"flex-end", width:'98%'}}>
                    <p onClick={isLeadGen} style={{cursor:"pointer"}}id="exit">X</p>
                </div>
            {route === 4 ? <h2 style={{display:"flex", justifyContent:"center", width : "75%", marginTop:"40px"}}>Thank you, well give you a call to get you scheduled soon!</h2> : <>
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
                <input id="name" onChange={inputs}placeholder='Joe Smith'></input>
                <input id="phone" onChange={inputs}placeholder='(860)-867-5309'></input>
                <button id="lastSlideBtn" onClick={leadGenClick}>Get Started</button>
                </div>
                }
                
               
                <div id='pageDotWrap' style={{display: "flex", flexDirection:'row', justifyContent:"space-around"}}>
                    <div id="pageDot1" className="active"></div>
                    <div id="pageDot2" className=""></div>
                    <div id="pageDot3" className=""></div>
                </div> </>
             }
              
            </div>
     
        
    );
  }
  
  export default LeadGen;