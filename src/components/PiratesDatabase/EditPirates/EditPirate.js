import React, { useState, useEffect } from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

function EditPirateWithHooks(props) {
    const pirates = "../../localDB/db.json"
    const [data, setData] = useState(pirates.pirates)
    const [apiLoading, setApiLoading] = useState(true)

    const [pirateID, setPirateID] = useState(
        props.location.search.substring(props.location.search.length - 24)
    );

    const [photos, setPhotos] = useState("");

    const api_url = "https://crudcrud.com/api/d6bc3f8d3d0540798b105319f415dca1/pirates/"

    useEffect(() => {
        // Fetch Data
        async function getData() {
            await fetch(api_url + pirateID)
                .then(response => response.json())
                .then(response => {
                    setData(response)
                    setApiLoading(false)
                })
                .catch(error => {
                    throw (error)
                })
        }
        // getData();
    }, [])

    useEffect(()=>{
        console.log(pirateID)
    }, [data])
    

    async function editPirate(name, picture, bounty, fruit, affiliation) {
        fetch(api_url + pirateID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                picture: picture,
                info: [
                    {
                        bounty: bounty,
                    },
                    {
                        fruit: fruit,
                    },
                    {
                        affiliation: affiliation,
                    },
                ],
            }),
        }).then((response) => {
            console.log("MODIFICATION!");
            props.history.push("/Pirates DB/");
            toast.success("Modification du Pirate " + name);
            return response
        })
            .catch(error => {
                throw (error)
            })
    }

    async function removePirate() {
        fetch(api_url + pirateID, {
            method: "delete",
        }).then((response) => {
            console.log("SUPPRESSION!");
            props.history.push("/Pirates DB/");
            toast.error("Supression du Pirate");
            return response
        })
    }


    function handleEdit(event) {
        event.preventDefault();

        const name = document.getElementById("nomPirate").value;
        const picture = document.getElementById("photoPirate").value;
        const prime = document.getElementById("primePirate").value;
        const fruit = document.getElementById("fruitPirate").value;
        const affiliation = document.getElementById("affiliationPirate").value;

        editPirate(name, picture, prime, fruit, affiliation);
    }

    function handlePhoto() {
        const photos = document.getElementById("photoPirate").value;
        setPhotos(photos);
    }

    if (apiLoading) {
        return (
            <Container className="d-flex justify-content-center align-items-center h-100">
                <h1>Data Loading..</h1>
            </Container>
        );
    } else {
        return (
            <>
                <div className="editAddWrapper pt-3">
                    <Container className="containerMargin bg-dark p-5 text-white">
                        <Row>
                            <Col>
                                <Form>
                                    <h1 className="text-center text-white">Edit Pirate</h1>
                                    <hr />
                                    <Form.Group controlId="nomPirate">
                                        <Form.Label>Nom du Pirate :</Form.Label>
                                        <Form.Control type="text" defaultValue={data.name} />{" "}
                                        {/*/ Faire le test avec value*/}
                                    </Form.Group>
                                    <Form.Group controlId="photoPirate">
                                        <Form.Label>URL d'une photo du Pirate</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Entrer une URL valide"
                                            onBlur={handlePhoto}
                                            defaultValue={data.picture}
                                        />
                                    </Form.Group>
                                    {data.picture !== "" && (
                                        <Image src={data.picture} rounded width="125" />
                                    )}
                                    <Form.Group controlId="primePirate">
                                        <Form.Label>Prime du Pirate</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Entrer la prime du Pirate"
                                            defaultValue={data.info[0].bounty}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="fruitPirate">
                                        <Form.Label>Fruit du Pirate</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Entrer le fruit du démon du pirate"
                                            defaultValue={data.info[1].fruit}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="affiliationPirate">
                                        <Form.Label>Affiliation</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Entrer l'affiliation du Pirate"
                                            defaultValue={data.info[2].affiliation}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={handleEdit}>
                                        Enregistrer
                  </Button>
                                </Form>
                            </Col>
                        </Row>
                        <p className="btn btn-danger mt-5" onClick={removePirate}>
                            Supprimer le Pirate
            </p>
                    </Container>
                </div>
            </>
        );
    }


}

export default EditPirateWithHooks;