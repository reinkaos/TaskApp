import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     console.log("userinfo found");
  //     navigate("/mynotes");
  //   }
  // }, [navigate]);
  return (
    <>
      <Container>
        <div className="main py-5">
          <Row className="landing-row">
            <h1 className="text-primary ">Welcome to Our Website!</h1>
            <p className="text-light ">This is the landing page content.</p>
          </Row>
          <Row className="landing-row mt-4 btncontainer">
            <Col>
              <a href="/login" className=" m-2">
                <Button
                  size="lg"
                  variant="outline-primary"
                  className="bg-light"
                >
                  Login
                </Button>
              </a>
            </Col>
            <Col>
              <a href="/register" className="m-2">
                <Button size="lg" variant="primary">
                  SignUp
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
