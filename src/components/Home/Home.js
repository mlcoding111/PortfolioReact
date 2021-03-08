// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-09 


import React, { useState } from 'react'
import ProjectList from './Project/ProjectList'
import Footer from './Footer'
import CategoriesList from './CategoriesList'
import HomeCarousel from './HomeCarousel'
import LearnMoreAccordion from './LearnMoreAccordion'
import { Link } from 'react-router-dom'
import { Row, Container, Col, Accordion, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faUser } from '@fortawesome/free-solid-svg-icons'




export default function Home() {
    const [categories] = useState(["All", "Utility", "Anime", "External Link"])
    const [currentCategorie, setCurrentCategorie] = useState("All");



    // When the user click a categorie, change the state and className to active
    function handleClick(e) {
        setCurrentCategorie(e)
        // console.log(currentCategorie)
    }

    const userIcon = <FontAwesomeIcon icon={faUser} />
    const laptopIcon = <FontAwesomeIcon icon={faLaptop} />




    return (
        <>
            <HomeCarousel />
            <section className="categories text-center" id="categories">
                <Container>
                    <CategoriesList categorie={categories} currentCategorie={currentCategorie} handleClick={handleClick} />
                    <Row noGutters>
                        <ProjectList currentCategorie={currentCategorie} />
                    </Row>
                </Container>
            </section>

            {/* About section */}

            <section className="text-center mt-5" className="about" id="about">
                <div className="container-fluid text-center aboutContainer">
                    <h1 className="p-5">About</h1>
                    <div className="row px-5 d-flex justify-content-center p-5 about-self-info">
                        <div className="col-lg-4 col-12 text-center  my-5">
                            <h2><span className="icons icon-profil">{userIcon}</span> Michael Lacroix</h2><br />
                            <h5 className="mb-4"><span className="icons icon-laptop">{laptopIcon}</span> Front-end developer</h5>
                            <p className="long-text">I am a Front-end developer, studying the web for the last 2 years. I have good experience with programming in general , since I have been coding in multiple languages as a hobby since I was a teenager.
I am currently focusing on Front-End development, with JavaScript , HTML/CSS, React. My ultimate goal is to become a full-stack developer.</p><p>Feel free to contact me and give me some feedbacks ! </p>
                            <a href="mailto:kennycodes@hotmail.com"><button className="btn contact-btn">Contact now</button></a>
                            <Link to="/cv"><Button variant="default" className="btn contact-btn ml-2">Resume</Button></Link>
                        </div>
                        <div className="col-lg-4 col-12 p-1 my-5">
                            <img width="75%" src={require("../../img/home/photoProfil.jpg")}></img>
                        </div>
                        <div className="col-lg-4 col-12 my-5">
                            <h2>My skills</h2>
                            <ul className="skills-list text-left">
                                ReactJS<li><div style={{ width: "90%" }}>90%</div></li>
                                Javascript<li><div style={{ width: "85%" }}>85%</div></li>
                                Html/css<li><div style={{ width: "75%" }}>75%</div></li>
                                PHP<li><div style={{ width: "35%" }}>35%</div></li>
                                C++ / C#<li><div style={{ width: "30%" }}>30%</div></li>
                                {/* Python<li><div style={{ width: "15%" }}>15%</div></li> */}
                            </ul>
                            <p className="long-text"></p>
                        </div>
                    </div>
                    <div id="learn-more">
                        <LearnMoreAccordion />
                    </div>

                </div>

            </section>

            {/* Contact section */}
            <section className="text-center my-5" className="about" id="contact">

            </section>

            <Footer />
        </>
    )
}




    // const scrollValueUntilChange = 500;
    // const [scrollY, setScrollY] = useState(document.body.scrollTop);
    // const handleScroll = () => {
    //     setScrollY(document.body.scrollTop); 
    //     if (scrollY > scrollValueUntilChange) {
    //         document.getElementById("navbar").className = "fixed-top nav navbar navbar-expand-lg navbar-light bg-transparent scrolled"
    //     } else {
    //         document.getElementById("navbar").className = "fixed-top nav navbar navbar-expand-lg navbar-light bg-transparent"
    //     }
    // };

    // useEffect(() => {
    //     document.body.addEventListener("scroll", handleScroll);
    //     // Return = clean up when component is ran
    //     return () => {
    //         document.body.removeEventListener("scroll", handleScroll);
    //     };
    // }, [scrollY]);
