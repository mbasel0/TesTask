import React from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

export default function Navigation({ brand, navItems }) {
  return (
    <div className={styles.Navigation}>
      <Navbar>
        <Navbar.Brand>
          <Link style={{ color: "#7b96a7" }} to="/brand">
            {brand}
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          {navItems.map((value, index) => {
            return (
              <Link style={{ marginLeft: "20px" }} to="/home" key={index}>
                <span>{value}</span>
              </Link>
            );
          })}
        </Nav>
        <Row className={styles.navigationItemUser}>
          <Col xs={"6"}>
            <Link to="/">
              <span>Lorem</span>
            </Link>
          </Col>
          <Col xs={"6"}>
            <Link to="/">
              <span>Ipsum</span>
            </Link>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}
