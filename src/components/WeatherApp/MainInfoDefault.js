import React from 'react'
import {Container} from 'react-bootstrap'

export default function MainInfoDefault() {
    return (
        <div>
            <Container className="main-info">
                <div className="row p-5 flex-column text-center mainInfoTop">
                    <h3>ca , r</h3>
                    <div className="col-12">
                        <span id="current-temp">3°<img src={IntersectionObserverEntry.sun} alt="sun"></img></span>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3> nuage </h3>
                            <h6> descr </h6>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-3 col-sm-6 mb-3">Feels Like <br /><span>2°</span> </div>
                        <div className="col-lg-3 col-sm-6 mb-3">Wind <br /><span>3mph</span></div>
                        <div className="col-lg-3 col-sm-6 mb-3"> Humidity<br /><span>4343</span></div>
                        <div className="col-lg-3 col-sm-6 mb-3"> Visibility<br /><span>4343km</span></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
