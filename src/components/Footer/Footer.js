import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer>
        <div className="footer-top">
          <Container>
            <Row>
              <Col md="12" lg="12">
                <div className="heading-title text-center">
                  <h2 className="title">Get in Touch</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12" lg="12" className="text-center">
                <div className="wb-contact">
                  <img
                    src={require("../../assets/images/mobile-1.png")}
                    alt=""
                    className="mb-icon"
                  ></img>
                  <div className="contact-details">
                    <h6>080-67466725</h6>
                    <h6>+91 9745825475</h6>
                  </div>
                </div>
              </Col>
              <Col md="12" lg="12" className="text-center">
                <div className="wb-contact">
                  <img
                    src={require("../../assets/images/map-marker-1.png")}
                    alt=""
                    className="mm-icon"
                  ></img>
                  <div className="address-details">
                    <h6>
                      Waffle'sbae Anyday, South Panampilly Nagar Road,
                      <br />
                      Cheriyakadavanthara Kadavanthara Part 1,
                      <br />
                      Ernakulam, Panampilly Nagar
                    </h6>
                  </div>
                </div>
              </Col>
              <Col md="12" lg="12" className="text-center">
                <div className="social-media">
                  <a
                    href="https://www.facebook.com/wafflesbaeanyday/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../assets/images/Facebook_logo.png")}
                      alt=""
                      className="fb-icon"
                    ></img>
                  </a>
                  <a
                    href="https://www.instagram.com/wafflesbaeanyday/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../assets/images/Instagram_icon.png")}
                      alt=""
                      className="in-icon"
                    ></img>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <div className="copyright-box">
            <Container>
              <Row>
                <div className="col-md-12 col-sm-12 text-center">
                  <div className="copyright-text">
                    &copy; Copyright {this.getYear()}, Waffle'sBae Anyday
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
