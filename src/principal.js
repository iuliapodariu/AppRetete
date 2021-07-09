import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Stuff extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md="auto">
              <Image src="images/download.png" roundedCircle />
            </Col>
          </Row>
        </Container>
        <h2>HELLO</h2>
        <p>
          Acasă nu e un loc, e bucuria de a fi împreună cu cei dragi. Aici sunt
          cele mai sincere râsete, cele mai mari visuri și cea mai bună mâncare.
          Pentru că totul se împarte. Mesele noastre de acasă merită tot ce-i
          mai bun.
        </p>

        <h2>RETETE</h2>
        <p>Retete culinare traditionale si moderne bine explicate!</p>
        <ol>
          <li>Retete de mancaruri</li>
          <li>Retete de afumaturi</li>
          <li>Retete de aperitive</li>
          <li>Retete de ciorbe si supe</li>
          <li>Retete italiene</li>
          <li>Retete de aperitive</li>
          <li>Retete de ciorbe si supe</li>
          <li>Retete de dulciuri</li>
        </ol>
      </div>
    );
  }
}

export default Stuff;
