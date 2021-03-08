// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-07 

import React, { useEffect, useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink, useHistory, useLocation, Link } from 'react-router-dom'
import ButtonInstallPWA from '../ButtonInstallPWA'
import { Link as Links } from 'react-scroll'



export default function NavigationCustom() {
    let loc = useLocation();
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;

    const [navExpanded, setNavExpanded] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 50)
        console.log(loc)
        document.querySelector("#nav-icon1").classList.remove("open")
        if (loc.pathname !== "/") {
            document.querySelector(".navBar").classList.add("sticky");
            document.querySelector(".nav-link").classList.remove("active")
        }
        // document.querySelector("#big-nav").classList.remove("sticky");
    }, [loc])

    const handleBodyClick = () => {
        if (navExpanded) {
            setNavExpanded(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // document.body.addEventListener("click", handleBodyClick);
        // Return = clean up when component is ran
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [window.pageYOffset]);


    const handleScroll = () => {
        let scrollValue = window.pageYOffset;
        console.log("scroll");
        if (loc.pathname === "/") {
            if (scrollValue > 100) {
                document.querySelector(".navBar").classList.add("sticky");
            } else {
                document.querySelector(".navBar").classList.remove("sticky");
            }
        }
    };

    const toggleOpen = (event) => {
        document.querySelector("#nav-icon1").classList.toggle("open")
    }

    const handleHomeNavClick = () => {
        setNavExpanded(false)
        document.querySelector("#nav-icon1").classList.remove("open")
    }


    // Function to returns navbar with the library reactScroll at home only
    function homeNavBar() {
        return (
            <>

                <Links className="main_link nav-link" to="carousel" activeClass="active" spy={true} offset={-100} smooth={true} duration={500} onClick={() => handleHomeNavClick()}>Home</Links>
                <Links className="main_link nav-link" to="categories" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={() => handleHomeNavClick()}>Projects</Links>
                <Links className="main_link nav-link" to="about" activeClass="active" spy={true} offset={-100} smooth={true} duration={500} onClick={() => handleHomeNavClick()}>About</Links>
                {/* <Link className="main_link nav-link" to="contact" activeClass="active" spy={true} offset={-100} smooth={true} duration={500}>Contact</Link> */}
                <ul className="social-icons-nav">
                    <li><a className="facebook main_link nav-link" href="https://www.facebook.com/michaelkenny.lacroix/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="linkedIn main_link nav-link" href="https://www.linkedin.com/in/michael-lacroix-20a653196/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                    <li><a className="github main_link nav-link" href="https://github.com/mlcoding111" target="_blank"><i className="fa fa-github"></i></a></li>
                </ul>
            </>
        );
    }
    // Function to returns navbar without the library when the user is not home
    function notHomeNavBar() {
        return (
            <>
                <Nav.Link eventKey="6" as={Link} to="/" className="nav-link" onClick={() => setNavExpanded(false)}>Home</Nav.Link>
                {/* <NavLink to="/" className="nav-link">Get home</NavLink> */}
                <NavDropdown eventKey="1" as={Link} title="Projects" id="basic-nav-dropdown">
                    <Nav.Link eventKey="2" as={Link} to="/Currency Convertor" className="dropdown-item" onClick={() => setNavExpanded(false)}>CurrencyConvertor</Nav.Link>
                    <Nav.Link eventKey="3" as={Link} to="/Anime Finder" className="dropdown-item" onClick={() => setNavExpanded(false)}>Anime</Nav.Link>
                    <Nav.Link eventKey="4" as={Link} to="/Pirates DB" className="dropdown-item" onClick={() => setNavExpanded(false)}>Pirates DB</Nav.Link>
                    <Nav.Link eventKey="5" as={Link} to="/Weather App" className="dropdown-item" onClick={() => setNavExpanded(false)}>Weather App</Nav.Link>

                </NavDropdown>
                <ul className="social-icons-nav">
                    <li><a className="facebook main_link nav-link" href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="linkedIn main_link nav-link" href="https://www.facebook.com" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                    <li><a className="github main_link nav-link" href="https://www.facebook.com" target="_blank"><i className="fa fa-github"></i></a></li>
                </ul>
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
            <Navbar bg="transparent" variant="dark" expand="lg" className="fixed-top navBar" id="navbar" onToggle={() => setNavExpanded(!navExpanded)} expanded={navExpanded}>
                <div className="container-fluid navContainer">
                    {/* <button onClick={() => { console.log(scrollY) }}>Get Scroll !</button> */}
                    {/* <div className="col-lg-1 col-md-2 col-3 mb-1 download-btn">
                        <ButtonInstallPWA />
                    </div> */}
                    <NavLink to="/"><img src={require('../../img/navBarLogo/MLWeb_white.png')} id="logo" alt="MLWeb Logo" className="ml-auto" /></NavLink>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleOpen}>
                        <div id="nav-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Navbar.Toggle>

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
