import React from "react";
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
//https://onepiece.fandom.com/wiki/Special:FilePath/Module-header-bg-transparent.png
//https://onepiece.fandom.com/wiki/Special:FilePath/Module-body-bg-transparent.png

const PirateBigTable = (props) => {
    return (
        <>
            <tr>
                <th scope="row"><img src={props.picture} width="75px" alt="props"></img></th>
                <td>{props.name}</td>
                <td>{props.affiliation}</td>
                <td>{props.fruit}</td>
                <td>{props.bounty}</td>
                <td><Link to={"/Pirate/" + props.name + "?id=" + props.id}><button className="btn btn-success">Edit</button></Link></td>
                {/* <td><button className="btn btn-danger">Delete</button></td> */}
                <td><ScrollLink to={`${props.index}`} activeClass="active" spy={true} offset={-100} smooth={true} duration={1000}><button className="btn btn-info">Info</button></ScrollLink></td>
            </tr>
        </>
    );
};

export default PirateBigTable;


{/* <Card>
                <Card.Body>
                    <Link to={"PirateBigTable/" + props.name + "?id=" + props.id}>
                        <h1>Nom : {props.name} id : {props.id}</h1>
                    </Link>
                </Card.Body>
            </Card> */}