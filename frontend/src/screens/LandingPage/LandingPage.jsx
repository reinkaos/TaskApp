import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import createNotesImg from "./CreateNotes.png";
import viewNotesImg from "./ViewNotes.png";
import editNotesImg from "./EditNotes.png";
import "./LandingPage.css"; // Make sure you have appropriate styling

const LandingPage = () => {
  return (
    <Container>
      <div className="main py-5">
        <Row className="landing-row">
          <h1 className="text-primary">Welcome to Our Website!</h1>
          <p className="text-light">This is the landing page content.</p>
        </Row>
        <Row className="landing-row mt-4">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src={createNotesImg}
                  alt="Create Notes"
                />
                <Carousel.Caption>
                  <h3>Create Notes</h3>
                  <p>Easily create new notes with our intuitive interface.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src={viewNotesImg}
                  alt="View Notes"
                />
                <Carousel.Caption>
                  <h3>View Notes</h3>
                  <p>Access your notes anytime, anywhere.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src={editNotesImg}
                  alt="Edit Notes"
                />
                <Carousel.Caption>
                  <h3>Edit Notes</h3>
                  <p>Update and manage your notes with ease.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="landing-row mt-4 btncontainer">
          <Col>
            <Link to="/login" className="m-2">
              <Button size="lg" variant="outline-primary" className="bg-light">
                Login
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/register" className="m-2">
              <Button size="lg" variant="primary">
                SignUp
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LandingPage;
