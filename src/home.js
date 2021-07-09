import React from "react";
import Retete from "./retete";
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = (props) => {
  const { introduceri, sterge, editeaza } = props;
  const lista = introduceri.map((item) => (
    <Retete
      autor={item.autor}
      categorie={item.categorie}
      titlu={item.titlu}
      descriere={item.descriere}
      id={item.id}
      key={item.id}
      sterge={sterge}
    />
  ));

  const stil = {
    container: { maxWidth: "1300px" },
    h2: { textAlign: "center" }
  };
  return (
    <>
      <h2 className="mr-auto" style={stil.h2}>
        Bucataria mea
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
      </h2>
      <hr />
      <div>{lista}</div>
    </>
  );
};

export default Home;
