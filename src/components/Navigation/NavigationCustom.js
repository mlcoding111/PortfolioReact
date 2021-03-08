// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-07 

import React, { useEffect } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import ButtonInstallPWA from '../ButtonInstallPWA'
import { Link } from 'react-scroll'



export default function NavigationCustom() {
    let loc = useLocation();
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;

    useEffect(() => {
        generateNavBar();
        window.scrollTo(0, 50)
        // document.querySelector("#big-nav").classList.remove("sticky");
    }, [loc])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // Return = clean up when component is ran
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [window.pageYOffset]);


    const handleScroll = () => {
        let scrollValue = window.pageYOffset;
        console.log("scroll");
        if (scrollValue > 100) {
            document.querySelector(".navBar").classList.add("sticky");
        } else {
            document.querySelector(".navBar").classList.remove("sticky");
        }
    };


    // Function to returns navbar with the library reactScroll at home only
    function homeNavBar() {

        return (
            <>

                <Link className="main_link nav-link" to="carousel" activeClass="active" spy={true} offset={-100} smooth={true} duration={500}>Home</Link>
                <Link className="main_link nav-link" to="categories" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                <Link className="main_link nav-link" to="about" activeClass="active" spy={true} offset={-100} smooth={true} duration={500}>About</Link>
                <Link className="main_link nav-link" to="contact" activeClass="active" spy={true} offset={-100} smooth={true} duration={500}>Contact</Link>

            </>
        );
    }
    // Function to returns navbar without the library when the user is not home
    function notHomeNavBar() {
        return (
            <>
                <NavLink to="/" className="nav-link">Home</NavLink>
                {/* <NavLink to="/" className="nav-link">Get home</NavLink> */}
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavLink to="/Currency Convertor" className="dropdown-item">CurrencyConvertor</NavLink>
                    <NavLink to="/Anime Finder" className="dropdown-item">Anime</NavLink>
                    <NavLink to="/Pirates DB" className="dropdown-item">Pirates DB</NavLink>
                    <NavLink to="/Weather App" className="dropdown-item">Weather App</NavLink>
                </NavDropdown>
            </>
        );
    }

    function generateNavBar() {
        if (loc.pathname === "/") {
            return homeNavBar()
        } else {
            return notHomeNavBar()
        }
    }

    return (
        <>
            <Navbar bg="transparent" expand="lg" className="fixed-top navBar" id="navbar">
                <div className="container-fluid navContainer">
                    {/* <button onClick={() => { console.log(scrollY) }}>Get Scroll !</button> */}
                    <div className="col-lg-1 col-md-2 col-3 mb-1 download-btn">
                        <ButtonInstallPWA />
                    </div>
                    <NavLink to="/"><img src={require('../../img/navBarLogo/MLWeb_black_resize.png')} id="logo" alt="MLWeb Logo" className="ml-auto" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {generateNavBar()}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
}
