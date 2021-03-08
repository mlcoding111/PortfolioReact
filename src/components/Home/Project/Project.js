// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-05 

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Project(props) {
    const icon = props.state ? <FontAwesomeIcon icon={faCheck} color="green"/> : <FontAwesomeIcon icon={faBan} color="red"/>
    return (
        <>
            <h1>{props.name}</h1>
            <div className="project-content">
                <img src={props.picture} alt="Project" width={props.size}/>
                <div className="content-overlay" />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title font-weight-bold">{props.name}</h3>
                    <p className="content-text text-white">{props.description}</p>
                    <p className="content-text text-white">Status : {icon}</p>
                </div>
            </div>
        </>

    )
}
