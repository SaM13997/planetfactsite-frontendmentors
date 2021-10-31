import './App.css';
import mySvg from '../src/background-stars.svg'
import Header from './Header';
import Planet from './Planet'
import Info from './Info'
import { useState, } from 'react';

function App() {

  let [currPlanet, setCurrPlanet] = useState('earth')


  let handlePlanetChange = (planet) => {
    let curpl = planet.toLowerCase()
    setCurrPlanet(curpl)
  }



  return(
    <div id="base" className='base' style={{ backgroundImage: `url(${mySvg})` }}
    >
      <div className="base-subwrapper">
  
        <div className="header">
          <Header planetHandler={handlePlanetChange} />
        </div>
        <div className="planet">
          <Planet key={currPlanet} planet={currPlanet}/>
        </div>
        <div className="info">
          <Info key={currPlanet} planet={currPlanet} />
        </div>
      </div>
    </div>  

  )
}
// TODO: add the hover states for the buttons --DONE
// TODO: add css to Info comp elements --DONE
// todo add animations with anime.js
export default App;
