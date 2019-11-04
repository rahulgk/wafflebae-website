import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Homepage extends Component {
  render() {
    return (
      <div id="home-page">
        <Header />
        <div
          className="home-page"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${require("../../assets/images/landing-page1.jpeg")})`
          }}
        >
          <h1>Waffle'sBae</h1>
          <small>Waffle is Bae. Anyday!</small>
        </div>
        <div className="about-section">
          <Container>
            <Row>
              <Col sm="12" md="6" className="align-self-center">
                <div className="heading-title">
                  <small className="wb-font-custom">Waffle'sbae Anyday</small>
                </div>
                <p>
                  Waffle'sBae Anyday has been a game changer in the comfort food
                  category since its launch in 2018 in Kochi by introducing
                  different vaieties of waffles, Mini Pancakes and Milkshakes.
                  In a market where majority of the people are not aware of
                  waffles or pancakes, Waffle'sBae Anyday has become a well
                  recognised brand within a short timespan. We serve a variety
                  of Waffles such as Belgian Waffles, Waffle Sandwiches, Bubble
                  Waffles, Mini Pancakes and Milk Shakes.
                </p>
              </Col>
              <Col sm="12" md="6">
                <div className="wb-item">
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/image1.jpg")}
                    alt=""
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="banner1"
          style={{
            backgroundImage: `url(${require("../../assets/images/cover-image2.jpg")})`
          }}
        ></div>
        <div className="speciality-section">
          <div className="heading-title">
            <small className="wb-font-custom">Waffle'sbae Anyday</small>
            <h2>
              We Believe In <span className="wb-font-custom">Quality</span>
            </h2>
          </div>
          <div className="content">
            <p>
              At Waffle'sbae Anyday providing great customer service is our top
              priority. Preserving the ecstasy of taste we dwell into serving
              the finest quality waffles, assuring a lingering sensation to your
              taste buds!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
