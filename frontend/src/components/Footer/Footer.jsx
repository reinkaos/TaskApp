import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-2 mt-2 position-relative">
      <Container>
        <Row>
          <Col>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Link 3
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Link 4
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Link 5
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Link 6
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-0 py-2 text-center">
              © {new Date().getFullYear()} Notes App
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
