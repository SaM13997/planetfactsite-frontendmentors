import React, {useState, useEffect} from 'react';
import './Planet.css'

export default function Planet(props){

    let currPlanet = props.planet.toLowerCase();
    let [headerState, setHeaderState] = useState('overview')
    const [imgSrc, setimgSrc] = useState(`/assets/planet-${props.planet}.svg`)
    const [imgVis, setimgVis] = useState('noDisplay')
    let curpl = currPlanet.toLowerCase();
    let planetText = {
        
        mercury:`Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,

        venus:`Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`,
        
        earth: `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`,

        mars:`Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,

        jupiter:`Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`,

        saturn:`Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`,
        
        uranus:`Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
        
        neptune:`Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`
    }
    
    
    let handleImgChange = (currState) => {
        setHeaderState(currState)
        if(currState==='overview'){
            setimgSrc(`/assets/planet-${curpl}.svg`)
            setimgVis(`noDisplay`)
        }else if(currState==='internal'){
            setimgVis(`noDisplay`)
            setimgSrc(`/assets/planet-${curpl}-internal.svg`)
        }else if(currState==='surface') {
            setimgSrc(`/assets/planet-${curpl}.svg`)
            setimgVis(`geology-image`)
        }
    }


    return(
        <div className="planet-base">

            <div className="planet-header">
                <div className="button-container">
                    <button onClick={() => handleImgChange('overview')}> OVERVIEW </button>
                    <button onClick={() => handleImgChange('internal')}> INTERNAL </button>
                    <button onClick={() => handleImgChange('surface')}> SURFACE </button>
                </div>
            </div>
    
           <div className="planet-main">
                <div className="planet-img">
                    <img id='img-planet' className='img-planet' src={imgSrc}  alt={`${headerState} of ${currPlanet}`} />
                    
                    <img id='img-planet-geology' className={`${imgVis}`} src={`/assets/geology-${currPlanet}.png`} style={{width:'90px', position:'absolute',}} alt={`Geology of ${currPlanet}`} />
                    
                </div>
                <div className="planet-text">
                    <h1>{currPlanet.toUpperCase()}</h1>
                    <p className='planet-text-paragraph' >{planetText[currPlanet]}</p>
                    <p className='planet-text-paragraph'>Source:   <a href={`https://en.wikipedia.org/wiki/${currPlanet}`} target='_blank'>Wikipedia</a></p>
                </div>
           </div>
        </div>
    )
}