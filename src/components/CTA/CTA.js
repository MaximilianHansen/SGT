import headerImg from '../../img/headerImg.png';
import headerImg1 from '../../img/headerImg1.png';
import headerImg2 from '../../img/headerImg2.png';
import headerImg3 from '../../img/headerImg3.png';

import React, {useState, useEffect } from 'react';


function CTA() {


    const imgArr = [headerImg,headerImg1, headerImg2, headerImg3]
    const [image, setImage] = useState(headerImg)


    useEffect(() => {
        imgSlider()
    },[]);
   
    

    const imgSlider = () => {
    let x = 0
    const slider=()=>{
         x++
        if(x > 3){x=0};
        setImage(imgArr[x]);
        setTimeout(()=>{slider(x)},6000);
    }   
    slider()
    }

    return (
        <>  

                <img src={image} style={{width: "90vw", borderRadius:"5%", marginTop:'10px'}}></img>
            
            <div style={{ width:"85%", display:"flex", flexDirection:'column', marginTop:'30px', marginBottom:'30px'}}>
            <h1 style={{marginBottom:"0px", marginTop: '0px'}}>Small Group Training is here</h1>
            <p style={{}}>Fun high intensity interval training workouts for all levels</p>
            <button style={{width:'50%', borderRadius: '6px', height: "2em", backgroundColor:"#f63c04"}}>Try a sesion</button>
            </div>
        </>
    );
  }
  
  export default CTA;
  