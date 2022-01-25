import launchPhone from '../../img/launchPhone.png'


function Phone() {
    return (
        <>

        <div style={{width:'85%', display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
          <h1 style={{marginBottom:'10px', marginTop: '20px'}}>How it works</h1>
        </div>
        <div style={{width:'90%', display:'flex', alignItems:'flex-start', flexDirection:'column', marginBottom:'30px'}}>
          <ul>
            <li>Groups of 4 people</li>
            <li>45 Minute Workouts</li>
            <li>Expertly led instruction</li>
            <li>Sessions available morning, afternoon, and evening</li>
          </ul>
        </div>
        


         <div style={{width:'100%', display:'flex', alignItems:'center', flexDirection:'column', backgroundColor:'#f9f9f9'}}>
          <h1 style={{width:'85%', marginBottom:'15px', marginTop: '35px'}}>Get on a schedule</h1>
        </div>
        <div style={{width:'100%', display:'flex', alignItems:'center', flexDirection:'column', backgroundColor:'#f9f9f9'}}>
            
            <img src={launchPhone} style={{width:"100%"}}></img>
        </div>
        
        </>
    );
  }
  
  export default Phone;