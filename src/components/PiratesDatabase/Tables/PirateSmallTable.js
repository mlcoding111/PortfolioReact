import React from "react";
import { Link } from 'react-scroll'
//https://onepiece.fandom.com/wiki/Special:FilePath/Module-header-bg-transparent.png
//https://onepiece.fandom.com/wiki/Special:FilePath/Module-body-bg-transparent.png

const PirateSmallTable = (props) => {
    return (
        <>
            <tr>
                <th scope="row"><img src={props.picture} width="100px" alt="props"></img></th>
                <td>{props.name}</td>
                <td><Link to={`${props.index}`} activeClass="active" spy={true} offset={-50} smooth={true} duration={1000}><button className="btn btn-info">Info</button></Link></td>
                <td><button className="btn btn-success">Edit</button></td>
            </tr>
        </>
    );
};

export default PirateSmallTable;


{/* <Card>
                <Card.Body>
                    <Link to={"Pirate/" + props.name + "?id=" + props.id}>
                        <h1>Nom : {props.name} id : {props.id}</h1>
                    </Link>
                </Card.Body>
            </Card> */}