import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function Navbar_Compoent() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-dark transparent ">
        <Container>
          <img onClick={()=>navigate(``)} style={{cursor:"pointer"}} src={logo} className="navbar_logo" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <button className=" me-4 bold">EVERYTHING</button>
              <button className=" me-4 bold">WOMEN</button>
              <button className=" me-4 bold">MEN</button>
              <button className=" bold">ACCESSORIES</button>
            </Nav>
            <Nav>
              <button className=" me-4">About</button>
              <button className=" me-4">Contact Us</button>
              <button className=" ">Users</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
