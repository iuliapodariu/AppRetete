import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

const Retete = (props) => {
  const { autor, titlu, categorie, descriere, editeaza, id, sterge } = props;
  const stil = {
    borderBottom: "4px dotted green"
  };
  const still = {
    svg: {
      pointerEvents: "none"
    }
  };
  return (
    <Container>
      <Row style={stil}>
        <Col sm={9}>
          <h5> {titlu} </h5>
          <h5> {autor} </h5>
          <p> Categorie: {categorie}</p>
          <p> Descriere: {descriere} </p>
        </Col>
        <Col sm={3} className="d-flex align-items-center">
          <Button variant="success" onClick={() => editeaza(id)}>
            <BsPencilSquare /> Editeaza
          </Button>
          <Button
            variant="link"
            onClick={() => editeaza(id)}
            id={id}
            style={stil}
          ></Button>

          <Button
            variant="link"
            onClick={() => sterge(id)}
            id={id}
            style={stil}
          ></Button>
          <Button variant="success" onClick={() => sterge(id)}>
            <RiDeleteBinLine /> Sterge
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Retete;
