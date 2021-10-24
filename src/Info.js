import './Info.css'

export default function Info(props){

    let currPlanet = props.planet.toLowerCase()

    let planetData = {
        mercury :{
            rotTime:'59 Days',
            revTime:'88 Days',
            radius:'2440 KM',
            avgTemp:'430 C'
        },
        venus : {
            rotTime:'243 Days',
            revTime:'225 Days',
            radius:'6052 KM',
            avgTemp:'471 C'
        },
        earth : {
            rotTime:'1 Day',
            revTime:'365 Days',
            radius:'6371 KM',
            avgTemp:'16 C'
        },
        mars : {
            rotTime:'1 Days',
            revTime:'2 Years',
            radius:'3390 KM',
            avgTemp:'-28 C'
        },
        jupiter : {
            rotTime:'10 Hours',
            revTime:'12 Years',
            radius:'69,991 KM',
            avgTemp:'-108 C'
        },
        saturn : {
            rotTime:'11 Hours',
            revTime:'29 Years',
            radius:'58,232 KM',
            avgTemp:'-138 C'
        },
        uranus :{
            rotTime:'17 Hours',
            revTime:'84 Years',
            radius:'25,362 KM',
            avgTemp:'-195 C'
        },
        neptune: {
            rotTime:'16 Hours',
            revTime:'165 Years',
            radius:'24,622 KM',
            avgTemp:'-201 C'
        },
        
    }

    return(
        <div className="info-base">
            <div className="rotTime info-tab">
                <p className="planetAttr">Rotation Time</p>
                <p className="AttrValue">{planetData[currPlanet].rotTime}</p>
            </div>

            <div className="revTime info-tab">
                <p className="planetAttr">Revolution Time</p>            
                <p className="AttrValue">{planetData[currPlanet].revTime}</p>
            </div>

            <div className="radius info-tab">
                <p className="planetAttr">Radius</p>            
                <p className="AttrValue">{planetData[currPlanet].radius}</p>
            </div>

            <div className="avgTime info-tab">
                <p className="planetAttr">Average Temp</p>            
                <p className="AttrValue">{planetData[currPlanet].avgTemp}</p>
            </div>
        </div>
    )
}