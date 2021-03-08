// let json = require("../../localDB/db.json");
// const { projects } = json;
// const { currentCategorie } = props;
// const [projectData, setProjectData] = useState([projects]);

// https://crudcrud.com/api/e77aa34642654fe982eaf6805f9cbf32/pirates2/
import React, { Component } from "react";
import PirateBigTable from './Tables/PirateBigTable'
import PirateSmallTable from './Tables/PirateSmallTable'
import PirateInfo from './PirateInfo'
import ButtonAddPirate from './AddPirates/AddPirateButton'
import { ToastContainer } from "react-toastify";
import { Container } from 'react-bootstrap'


export class ManagePirates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pirates: require("../../localDB/db.json"),
            apiLoading: false,
            pcVersion: true,
            api_url: "https://crudcrud.com/api/d6bc3f8d3d0540798b105319f415dca1/pirates/",
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        await fetch(this.state.api_url)
            .then(response => response.json())
            .then(response => {
                this.setState({ data: response, apiLoading: false })
            })
            .catch(error => {
                throw (error)
            })
    }

    render() {

        if (this.state.apiLoading) {
            return (
                <Container className="d-flex justify-content-center align-items-center flex-column h-100 text-center bg-light">
                    <h1>WARNING !</h1>
                    <div className="btn" onClick={() => console.log(this.state.pirates.pirates)}>Ccc</div>
                    <p className="long-text">Data is loading.. <br /> Crudcrud has reached its limit.. <br />You are navigating offline..</p>
                </Container>
            );
        } else {
            return (

                <div className="pirateDbWrapper pt-3">
                    <ToastContainer autoClose={3000} hideProgressBar />
                    <Container>
                        <header>
                            <div className="row text-center pt-5">
                                <div className="col-12 text-white">
                                    <div className="text-red">
                                        <p>crudcrud link expires every 24 hours.</p>
                                        <p>*For the crud to be working , ask the admin to renew crudcrud link*</p>
                                    </div>
                                    <h2>Database of pirates from One Piece</h2>
                                    <p>List of pirates below</p>
                                </div>
                            </div>
                        </header>
                        <section className="p-3" id="pirates-table">
                            <div className="table-responsive">
                                {/* VERSION FOR PC AND IPAD*/}
                                <table className="table table-dark table-hover d-none d-md-block d-sm-none">
                                    <thead>
                                        <tr>
                                            <th scope="col">Preview</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Affiliation</th>
                                            <th scope="col">Fruit</th>
                                            <th scope="col">Bounty</th>
                                            <th scope="col">Edit</th>
                                            {/* <th scope="col">Delete</th> */}
                                            <th scope="col">Info</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {this.state.data.map((element, i) => (
                                            <PirateBigTable name={element.name} id={element._id} index={i} key={i} affiliation={element.info[2].affiliation} fruit={element.info[1].fruit} bounty={element.info[0].bounty} picture={element.picture} />
                                        ))} */}

                                        {this.state.pirates.pirates.map((element, i) => (
                                            <PirateBigTable name={element.name} id={element.id} index={i} key={i} affiliation={element.info[2].affiliation} fruit={element.info[1].fruit} bounty={element.info[0].bounty} picture={element.picture} />
                                        ))}
                                    </tbody>
                                </table>
                                {/* VERSION FOR MOBILE*/}
                                <table className="table table-dark table-hover d-md-none">
                                    <thead>
                                        <tr>
                                            <th scope="col">Peview</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Info</th>
                                            <th scope="col">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.pirates.pirates.map((element, i) => (
                                            <PirateSmallTable name={element.name} id={element.id} index={i} key={i} affiliation={element.info[2].affiliation} fruit={element.info[1].fruit} bounty={element.info[0].bounty} picture={element.picture} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <ButtonAddPirate />
                        <hr />
                        <section className="pirate-info p-3">
                            {this.state.pirates.pirates.map((element, i) => (
                                <div className="row text-center d-flex justify-content-center my-3" id={i} key={i}>
                                    <PirateInfo name={element.name} picture={element.picture} affiliation={element.info[2].affiliation} fruit={element.info[1].fruit} bounty={element.info[0].bounty} />
                                </div>
                            ))}
                        </section>
                    </Container>
                </div>
            );
        }

    }
}

//   async componentDidMount() {
//     try {
//       const response = await fetch("http://localhost:3001/pirates/");
//       const json = await response.json();
//       this.setState({ data: json });
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

export default ManagePirates;
