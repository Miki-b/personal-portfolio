import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/MBLogoo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
               <a href="https://www.linkedin.com/in/michael-behailu-20ab05287/"><img src={navIcon1} alt="" /></a>
               <a href="https://github.com/Miki-b"><img src={navIcon2} alt="" /></a>
               <a href="https://www.instagram.com/miki_behailu/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
