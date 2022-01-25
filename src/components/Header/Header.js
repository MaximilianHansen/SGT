import launchLogo from '../../img/launchLogo.webp';
import hamburg from '../../img/hamburg.png';
import { useState } from 'react';
import "./Header.css"






function Header({isMobile}=this.props) {

  const [isHam, setIsHam] = useState(false)
   

  const hamburgFunc = () => {
    setIsHam(!isHam)
  }

  return (
      <div style={{ width:"100vw", display:"flex", alignItems:"center", flexDirection:'column', backgroundColor:'#D3D3D3', marginBottom: "10px"}}>
        <div style={{ width:"90%", display:"flex",justifyContent:"space-between", alignItems:'center', marginTop: '25px', marginBottom: '25px'}}>
          <img src={launchLogo} style={{height:"3em"}}></img>
          
          {isMobile ? <img src ={hamburg} onClick={hamburgFunc} style={{cursor:'pointer', height:"2em"}}></img> :
          <div style={{display:'flex', flexDirection:"row"}}>
            <p style={{fontSize:"2em",cursor:"pointer" }}>How it Works</p>
            <p style={{fontSize:"2em", marginLeft:'30px', cursor:'pointer'}}>Try a session</p>
          </div>
          }
          
        </div>
        {isHam ?
          <div style={{width:"100vw"}}>
            <div style={{cursor:'pointer',padding:'10px', borderTop:'black 1px solid',borderBottom:'black 1px solid',margin:'2px', height:'2em', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#f9f9f9'}}>
              <p style={{}}>How it Works</p>
            </div>
            <div style={{cursor:'pointer',padding:'10px', borderBottom:'black 1px solid',margin:'2px', height:'2em', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#f9f9f9'}}>
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
