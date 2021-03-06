import headerImg from '../../img/headerImg.png';
import headerImg1 from '../../img/headerImg1.png';
import headerImg2 from '../../img/headerImg2.png';
import headerImg3 from '../../img/headerImg3.png';
import './CTA.css'

import React, {useState, useEffect } from 'react';


function CTA({isLeadGen}=this.props) {


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
            
            <div id="wrapper1" >
            <img id="headerImg" src={image} ></img>
            <div id="wrapper2">
                <h1>Small Group Training is here</h1>
                <p>Fun high intensity interval training workouts for all levels</p>
                <button onClick={isLeadGen} style={{width:'50%', borderRadius: '6px', height: "2em", backgroundColor:"#f63c04"}}>Try a sesion</button>
            </div>
            </div>
        </>
    );
  }
  
  export default CTA;
  