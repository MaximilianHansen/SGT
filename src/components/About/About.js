import './About.css'

function About() {
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
        
        </>
    );
  }
  
  export default About;