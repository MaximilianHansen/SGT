import launchPhone from '../../img/launchPhone.png'
import './Phone.css'


function Phone() {
    return (
        
    <div>
        <div>
            <div id='titleWrap'>
              <h1 id='title'>How it works</h1>
            </div>
            <div id='listDiv' >
              <ul>
                <li>Groups of 4 people</li>
                <li>45 Minute Workouts</li>
                <li>Expertly led instruction</li>
                <li>Sessions available morning, afternoon, and evening</li>
              </ul>
            </div>
        </div>

        <div>
            <div id='titleWrap'>
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