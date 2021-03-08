import React from 'react'
import { Row, Container, Col, Accordion, Card, Button } from 'react-bootstrap'

import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


export default function LearMoreAccordion() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="12">
                        <h2 className="p-5">Learn more</h2>
                        <Accordion defaultActiveKey="0" className="pb-5">
                            <Card>
                                <Accordion.Toggle as={Card.header} variant="link" eventKey="0" >
                                    <h4>Who am I ?</h4>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Hello, I am Michael, 24 years old. Passionate about computers since my teenage years. I have been a "Self-Taught" programmer since I was 14! I started with C / C ++ which gave me a very good base and which made me a very autonomous programmer! I have tried many programming languages, all for pure pleasure and hobby. As I have always programmed with low-level programming languages ​​mainly in the back-end, the front-end was completely unknown to me.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>

                                <Accordion.Toggle as={Card.header} variant="link" eventKey="1">
                                    <h4>Reorienting</h4>
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        Having completed a DEP in Ore Extraction, I worked in mining industry for 2 years. As I live in Abitibi, there were not many programs offered in the area of ​​programming! I then discovered an AEC in front-end development available remotely, so I changed jobs to do what I like. As the places were very limited, I learned by myself the html / css / javascript without any "background" in web development, I built a portfolio and I was selected! It was then that I started to "have fun" with web development.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>

                                <Accordion.Toggle as={Card.header} variant="link" eventKey="2">
                                    <h4> Hard skills / Soft skills</h4>
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <img height="50"
                                            src="https://raw.githubusercontent.com/devicons/devicon/40cd6bc89a299dc50ac289f8e3b071d0dff49d9c/icons/react/react-original.svg"
                                            style={{ maxWidth: "100%" }} />
                                        <img height="50"
                                            src="https://raw.githubusercontent.com/devicons/devicon/40cd6bc89a299dc50ac289f8e3b071d0dff49d9c/icons/javascript/javascript-original.svg"
                                            style={{ maxWidth: "100%" }} />
                                        <img height="50"
                                            src="https://raw.githubusercontent.com/devicons/devicon/40cd6bc89a299dc50ac289f8e3b071d0dff49d9c/icons/html5/html5-original.svg"
                                            style={{ maxWidth: "100%" }} /><br></br><br></br>
                                                My main strength right now is with JavaScript, with the React framework! In addition to my front-end studies,
                                                I study the back-end in my spare time, in order to become a full stack web developer.
                                                As I have always learned to program by myself, I am very autonomous and I find it quite easy to learn new technologies.
                                                I don't have a lot of hands-on experience, but I spent several years programming for fun in multiple languages.
                                                I would say that open-mindedness, empathy and autonomy are my most acquired Soft Skills.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
