import launchPhone from '../../img/launchPhone.png'
import './Phone.css'


function Phone() {
    return (
        
    <div id='secWrap'>
        <div id="aboutWrap">
            <div id='titleWrap'>
              <h1 id='title'>Here's how it works</h1>
              <div id='listDiv' >
              <ul>
                <li>Groups of 4 people</li>
                <li>45 Minute Workouts</li>
                <li>Expertly led instruction</li>
                <li>Sessions available morning, afternoon, and evening</li>
              </ul>
            </div>
            </div>
            
        </div>

        <div id="phoneSecWrap">
            <div id='title2Wrap'>
              <h1 id='title2'>Get on a schedule</h1>
            </div>
            <div id='phoneWrap'>
                <img id='imgPhone'src={launchPhone} style={{width:"100%"}}></img>
            </div>
        </div>
    </div>
      
    );
  }
  
  export default Phone;