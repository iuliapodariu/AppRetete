import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, Link, Switch } from "react-router-dom";
import Adaugare from "./adaugare";
import Home from "./home";
import NotFound from "./notfound";
import Principal from "./principal";
import Contact from "./Contact";
//import "./styles.css";

export default function App() {
  const [lista, setLista] = useState([]);

  const stergRetete = (id) => {
    const listaNoua = lista.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setLista(listaNoua);
  };

  const adaugaRe = (act) => {
    act.id = lista.length + 1;
    setLista([...lista, act]);
  };

  const stil = {
    container: { maxWidth: "1300px" }
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="navbar navbar-dark bg-dark" variant="light" expand="sm">
        <Navbar.Brand href="#home">BUCATARIA MEA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/principal">
              Principal
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Lista de Retete
            </Nav.Link>
            <Nav.Link as={Link} to="/adaugare">
              Adauga reteta
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home introduceri={lista} sterge={stergRetete} />
        </Route>
        <Route path="/adaugare">
          <Adaugare transmit={adaugaRe} />
        </Route>
        <Route path="/principal">
          <Principal transmit={adaugaRe} />
        </Route>
        <Route path="/Contact">
          <Contact transmit={adaugaRe} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}
