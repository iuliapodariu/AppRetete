import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Image } from "react-bootstrap";

const Adaugare = (props) => {
  const [autor, setAutor] = useState("");
  const [titlu, setTitlu] = useState("");
  const [categorie, setCategorie] = useState("");
  const [descriere, setDescriere] = useState("");

  const stil = {
    h2: { textAlign: "center" }
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const retete = { autor, titlu, categorie, descriere };
    props.transmit(retete); //  Transmit spre App obiectul "retete"
    //  Golesc controalele formularului
    setAutor("");
    setTitlu("");
    setCategorie("");
    setDescriere("");
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Reteta noua
      </h2>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="images/download.png" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="images/download.png" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="images/download.png" rounded />
          </Col>
        </Row>
      </Container>

      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Autor:</Form.Label>
          <Form.Control
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Titlu:</Form.Label>
          <Form.Control
            type="text"
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Categorie:</Form.Label>
          <Form.Control
            type="text"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descriere:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="Submit">
          Adauga reteta
        </Button>
        <Button variant="success" type="Reset">
          Reset
        </Button>
      </Form>
    </>
  );
};

export default Adaugare;
