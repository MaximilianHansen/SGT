import launchLogo from '../../img/launchLogo.webp';
import hamburg from '../../img/hamburg.png';
import { useState } from 'react';






function Header() {

  const [isHam, setIsHam] = useState(false)

  const hamburgFunc = () => {
    setIsHam(!isHam)
  }

  return (
      <div style={{ width:"100vw", display:"flex", alignItems:"center", flexDirection:'column', backgroundColor:'#f9f9f9', marginBottom: "10px"}}>
        <div style={{ width:"90%", display:"flex",justifyContent:"space-between", alignItems:'center', marginTop: '25px', marginBottom: '25px'}}>
          <img src={launchLogo} style={{height:"3em"}}></img>
          <img src ={hamburg} onClick={hamburgFunc} style={{height:"2em"}}></img>
        </div>
        {isHam ?
          <div style={{width:"100vw"}}>
            <div style={{padding:'10px', borderTop:'black 1px solid',borderBottom:'black 1px solid',margin:'2px', height:'2em', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#f9f9f9'}}>
              <p style={{}}>How it Works</p>
            </div>
            <div style={{padding:'10px', borderBottom:'black 1px solid',margin:'2px', height:'2em', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#f9f9f9'}}>
              <p>Try a session</p>
            </div>
          </div> 
          :
          <></>
        }
      </div>
  );
}

export default Header;
