import React from 'react'
import { Container } from 'react-bootstrap'

export default function MainInfo(props) {
    const { country, city, temp, icon, tempState, tempStateDescription, feels_like, wind_speed, humidity, visibility } = props
    return (
        <>

            <Container className="main-info">
                <div className="row p-5 flex-column text-center mainInfoTop">
                    <h3>{country} , {city}</h3>
                    <div className="col-12">
                        <span id="current-temp">{temp}°<img src={icon} alt="icon"></img></span>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3> {tempState} </h3>
                            <h6> {tempStateDescription} </h6>
                        </div>
                    </div>
                </div>    
                <div className="container-fluid mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-3 col-sm-6 mb-3">Feels Like <br /><span>{feels_like}°</span> </div>
                        <div className="col-lg-3 col-sm-6 mb-3">Wind <br /><span>{wind_speed}mph</span></div>
                        <div className="col-lg-3 col-sm-6 mb-3"> Humidity<br /><span>{humidity}</span></div>
                        <div className="col-lg-3 col-sm-6 mb-3"> Visibility<br /><span>{visibility}km</span></div>
                    </div>
                </div>        
            </Container>

        </>
    )
}
