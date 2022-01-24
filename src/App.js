import './App.css';

import Header from './components/Header/Header.js';
import CTA from './components/CTA/CTA.js';
import King from './components/King/King';
import About from './components/About/About'
import Phone from './components/Phone/Phone'


function App() {
  return (
    <div className="App">
      <div style={{ width:"100vw", display:"flex", alignItems:"center", flexDirection:'column'}}>
        <Header />
        <CTA />
        <King />
        <About />
        <Phone />
      </div>
    </div>
  );
}

export default App;
