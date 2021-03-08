// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-05 

// https://www.npmjs.com/package/react-animated-css
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Animated } from "react-animated-css";

export default function HomeCarousel() {
    return (
        <>
              <Carousel autoPlay={true} interval={5000}>
                <Carousel.Item id="carousel-item-1">
                    {/* <img
                        className="d-block w-100 pickgradient"
                        
                        // https://cdn.hipwallpaper.com/i/45/87/MOJ98S.jpg
                        alt="First slide"
                        height="100%"
                    /> */}
                    <Carousel.Caption>
                        <Animated animationIn="lightSpeedIn" animationOut="lightSpeedOut" animationDelay="1s" isVisible={true}>
                            <h5>Built with <code>React/JS</code></h5>
                        </Animated>
                        <Animated animationIn="bounceInRight" animationDelay="1s" isVisible={true}>
                            <p>Built using the framework React</p>
                        </Animated>
                        {/* <Animated animationIn="bounceInRight" animationDelay="1s" isVisible={true}>
                            <p><a href="/#">More info</a></p>
                        </Animated> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  id="carousel-item-2">
                    {/* <img
                        className="d-block w-100"
                        src={require("../../img/home/react-neutron2.jpg")}
                        alt="Third slide"
                    /> */}
                    <Carousel.Caption>
                        <Animated animationIn="slideInDown" animationOut="fadeOut" animationDelay="1s" isVisible={true}>
                            <h5>Website by <code>MLWeb</code></h5>
                        </Animated>
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationDelay="1s" isVisible={true}>
                            <p>All the projects built by a single person !</p>
                        </Animated>
                        {/* <Animated animationIn="zoomIn" animationOut="fadeOut" animationDelay="1s" isVisible={true}>
                            <p><a href="/#">More info</a></p>
                        </Animated> */}
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item   id="carousel-item-3">
                    {/* <img
                        className="d-block w-100"
                        src={require("../../img/home/portable.jpg")}
                        alt="Third slide"
                    /> */}
                    <Carousel.Caption>
                        <Animated animationIn="zoomIn" animationOut="fadeOut" animationDelay="1s" isVisible={true}>
                            <h5>Multiple technologies used !</h5>
                        </Animated>
                        <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationDelay="1s" isVisible={true}>
                            <p>React-scroll, SASS, Animate-css, React-transition !</p>
                        </Animated>
                        {/* <Animated animationIn="zoomIn" animationOut="fadeOut" animationDelay="1s" isVisible={true}>
                            <p><a href="/#">More info</a></p>
                        </Animated> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
