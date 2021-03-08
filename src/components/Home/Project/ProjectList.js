// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-05 

import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Project from './Project'
import { Link } from 'react-router-dom'
//https://crudcrud.com/api/d6bc3f8d3d0540798b105319f415dca1


export default function ProjectList(props) {

    let json = require("../../../localDB/db.json");
    const { projects } = json;
    const { currentCategorie } = props;
    const [projectData, setProjectData] = useState([projects]);



    useEffect(() => {
        filter(projects)
        // Re-build the state array to contains only element with the matching categorie
        // Remove condition " && obj.active " to show even inactive apps
        function filter(element) {
            let newArr = element.filter(obj => obj.categorie.includes(currentCategorie) && obj.active)
            setProjectData(newArr);
        }
        console.log(currentCategorie)

    }, [currentCategorie])


    function filter(element) {
        let newArr = element.filter(obj => obj.categorie.includes(currentCategorie) && obj.active)
        setProjectData(newArr);
    }

    // Function to determin if the project is external or not
    const filterContent = (element, index) => {
        // if the link is external, return the project inside an external link
        if (element.external) {
            return (
                <>
                    <a href={element.link} target="_blank">
                        <Project name={element.name} picture={element.picture} size={element.width} description={element.description} state={element.state} className="box-shadow-lg" />
                        &nbsp;
                    </a>
                </>
            )
            // else, just use default router Link to wrap the project
        } else {
            return (
                <>
                    <Link to={`/${element.name}`} key={index} target={element.name === "One Piece" ? "_blank" : ""} style={{ textDecoration: 'none' }} >
                        <Project name={element.name} picture={element.picture} description={element.description} state={element.state} className="box-shadow-lg" />
                    </Link>
                </>
            )

        }
    }

    return (
        <>

            {projectData.map((element, index) => (
                <Col md="6" xl="4" key={index} className="my-5 p-2">
                    {filterContent(element, index)}
                </Col>
            ))}
        </>

    )


}

// Handle Error
   // function App() {
    //     const [state, setState] = useState([])
    //     const [hasError, setHasError] = useState(false)
    //     useEffect(() => {
    //         fetch("/api/data").then(
    //             res => setState(res.data)
    //         ).catch(err => setHasError(true))
    //     }, [])
    //     return (
    //         <>
    //             {hasError? <div>Error occured.</div> : (state.map( d => <div>{d}</div>))}      
    //         </>
    //     )
    // }
