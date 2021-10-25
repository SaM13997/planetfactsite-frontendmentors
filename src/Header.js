import { useState } from 'react'
import './Header.css'

export default function Header(props){

    let [activeClass, setActiveClass] = useState('noDisplay');

    let menuDisplayToggle = (e) => {
        activeClass==='noDisplay' ? setActiveClass('yesDisplay') : setActiveClass('noDisplay')
    }
    
    let planets=['MERCURY', 'VENUS', "EARTH", "MARS", "JUPITER","SATURN","URANUS","NEPTUNE"]

    const uppercaseHelper = (str) => {
      let strU = str.toUpperCase()
      return strU
    }

    return(
        <div class="header-main">
            <div id='planet-list-menu-overlay' className={` header-menu-overlay ${activeClass} `}>
                    <button onClick={menuDisplayToggle} className='header-menu-overlay-button'>Close</button>
                    <ul>
                      {
                        planets.map((planet, index) => <li key={index} onClick={() =>{ props.planetHandler(planet); menuDisplayToggle() }}>{planet}</li>)
                      }
                    </ul>
            </div>
            <header>
                <h1 >The Planets</h1>
                <img onClick={menuDisplayToggle} id='hamburger-menu'  src='/assets/icon-hamburger.svg' alt="" width='30px' height='30px' />
                <div id='planet-list' className="planet-list noListDisplay ">
                <ul>
                      {
                        planets.map((planet, index) => <li key={index} onClick={() =>{ props.planetHandler(planet);}}>{planet}</li>)
                      }
                    </ul>
                </div>
            
            </header>
        </div>
    )

} 