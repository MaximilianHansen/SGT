import launchLogo from '../../img/launchLogo.webp';
import hamburg from '../../img/hamburg.png';
import "./Header.css"






function Header({isMobile, isLeadGen, hamburgFunc, isHam}=this.props) {


  return (
      <div style={{ width:"100vw", display:"flex", alignItems:"center", flexDirection:'column', backgroundColor:'#f2f2f2'}}>
        <div style={{ width:"90%", display:"flex",justifyContent:"space-between", alignItems:'center', height: "10vh"}}>
          <img src={launchLogo} style={{height:"3em"}}></img>
          
          {isMobile ? <img src ={hamburg} onClick={hamburgFunc} style={{cursor:'pointer', height:"2em" }}></img> :
          <div style={{display:'flex', flexDirection:"row"}}>
            <p style={{fontSize:"2em",cursor:"pointer" }}>How it Works</p>
            <p onClick={isLeadGen} style={{fontSize:"2em", marginLeft:'30px', cursor:'pointer'}}>Try a session</p>
          </div>
          }
          
        </div>
        {isHam ?
          <div style={{ width:"100vw"}}>
            <div  style={{cursor:'pointer',  padding:'10px', borderTop:'black 1px solid',borderBottom:'black 1px solid',margin:'2px', height:'2em', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#f9f9f9'}}>
              <p style={{}}>How it Works</p>
            </div>
            <div onClick={isLeadGen} style={{cursor:'pointer',padding:'10px', borderBottom:'black 1px solid',margin:'2px', height:'2em', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#f9f9f9'}}>
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
