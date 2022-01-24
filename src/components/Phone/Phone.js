import launchPhone from '../../img/launchPhone.png'


function Phone() {
    return (
        <>
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