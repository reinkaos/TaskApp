import React from "react";
import { Container } from "react-bootstrap";
import "./Main.css";
const Main = ({ title, children }) => {
  return (
    <div className="mainbg">
      <Container>
        <div className="page">
          {title && (
            <>
              <h1 className="heading">{title}</h1>
              <hr />
            </>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
};

export default Main;
