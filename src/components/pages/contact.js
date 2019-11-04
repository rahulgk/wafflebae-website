import React, { Component } from "react";
import { Container } from "reactstrap";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contact-page">
          <div
            className="contact-title"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${require("../../assets/images/cover-image6.jpg")})`
            }}
          >
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="contact-content">
          <h3>Contact Waffle'sbae Anyday</h3>
          <p>
            We love hearing from our customers, all questions, comments and
            feedback are always welcome.
          </p>
          <p>
            If you have a general inquiry or question, you can call us on{" "}
            <span className="text-warning">095676 89900.</span> Alternatively,
            you can send us an email on{" "}
            <span className="text-warning">wafflesbaeanyday@gmail.com,</span>{" "}
            and we’ll do our best to reply as quickly as possible.
          </p>
          <p>
            If you are interested in franchise and investment opportunities,
            please refer to{" "}
            <a className="text-warning" href="#Franchise">
              this page.
            </a>
          </p>
        </div>
        <div className="location">
          <Container>
            <div className="location-title">
              <h3>Locations</h3>
            </div>
            <div className="location-content">
              <div className="location-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/location-image1.jpg")}
                  alt=""
                ></img>
                <div className="location-item-text">
                  <h4 className="wb-font-custom">Kakkanad</h4>
                  <p>
                    Waffle'sbae Anyday, Tv centre,
                    <br />
                    Seaport - Airport Road, Padamughal,
                    <br />
                    Ernakulam, Kakkanad.
                  </p>
                </div>
              </div>
              <div className="location-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/location-image2.jpg")}
                  alt=""
                ></img>
                <div className="location-item-text">
                  <h4 className="wb-font-custom">Panampilly Nagar</h4>
                  <p>
                    Waffle'sbae Anyday, South Panampilly Nagar Road,
                    <br />
                    Cheriyakadavanthara Kadavanthara Part 1,
                    <br />
                    Ernakulam, Panampilly Nagar.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
