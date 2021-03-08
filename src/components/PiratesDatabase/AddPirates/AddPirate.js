import React, { Component } from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

export class AddPirate extends Component {
  constructor(props) {
    super(props);
    this.state = { photo: "", api_url: "https://crudcrud.com/api/d6bc3f8d3d0540798b105319f415dca1/pirates/", errors: {} };
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.formulaireEstValide = this.formulaireEstValide.bind(this);
  }

  formulaireEstValide(name, picture, bounty, fruit, affiliation) {
    const _errors = {};
    if (!name) _errors.name = "Pirate's name is required";
    if (!picture) _errors.picture = "Pirate's picture is required";
    if (!bounty) _errors.bounty = "Pirate's bounty is required";
    if (!fruit) _errors.fruit = "Pirate's fruit is required";
    if (!affiliation) _errors.affiliation = "Pirate's affiliation is required";
    this.setState({ errors: _errors });
    return Object.keys(_errors).length === 0;
  }

  async savePirate(name, picture, bounty, fruit, affiliation) {
    const json = require("../../../localDB/db.json");
    json.pirates.push({
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
    });
    this.props.history.push("/Pirates DB")
  }

  // Function to add user to database
  async addPirate(name, picture, bounty, fruit, affiliation) {
    fetch(this.state.api_url, {
      method: 'POST',
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
    }).then(response => response.json())
      .catch(error => {
        throw (error)
      })
    this.props.history.push("/Pirates DB")
    toast.success("Pirate ajouter")
  }

  render() {

    return (
      <>
        <div className="editAddWrapper pt-3">
          <Container className="containerMargin bg-dark p-5 text-white">
            <Row>
              <Col>
                <Form>
                  <h1 className="text-center text-white">Add a Pirate</h1>
                  <hr />
                  <Form.Group controlId="nomPirate">
                    <Form.Label>Pirate's name :</Form.Label>
                    <Form.Control type="text" placeholder="Pirate's name" isInvalid={!!this.state.errors.name} /> {/*/ Faire le test avec value*/}
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="photoPirate">
                    <Form.Label>Pirate's picture</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrer une URL valide"
                      onBlur={this.handlePhoto}
                      isInvalid={!!this.state.errors.picture}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.picture}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {this.state.photo !== "" && (
                    <Image src={this.state.photo} rounded width="125" />
                  )}
                  <Form.Group controlId="primePirate">
                    <Form.Label>Pirate's bounty</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrer la prime du Pirate"
                      isInvalid={!!this.state.errors.bounty}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.bounty}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="fruitPirate">
                    <Form.Label>Pirate's devil fruit</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrer le fruit du démon du pirate"
                      isInvalid={!!this.state.errors.fruit}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.fruit}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="affiliationPirate">
                    <Form.Label>Pirate's affiliation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrer l'affiliation du Pirate"
                      isInvalid={!!this.state.errors.affiliation}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.affiliation}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleAdd}
                  >
                    Enregistrer
                </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }

  handleAdd(event) {
    event.preventDefault();

    const name = document.getElementById("nomPirate").value;
    const picture = document.getElementById("photoPirate").value;
    const type = document.getElementById("primePirate").value;
    const aired = document.getElementById("fruitPirate").value;
    const duration = document.getElementById("affiliationPirate").value;

    if (this.formulaireEstValide(name, picture, type, aired, duration)) {
      this.addPirate(name, picture, type, aired, duration);
    }

  }

  handlePhoto() {
    const photos = document.getElementById("photoPirate").value;
    this.setState({ photo: photos });
  }
}

export default AddPirate;
