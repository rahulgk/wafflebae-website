import React, { Component } from "react";
import { Container } from "reactstrap";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="gallery-page">
          <div
            className="gallery-title"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${require("../../assets/images/cover-image3.jpg")})`
            }}
          >
            <h2>Gallery</h2>
          </div>
        </div>
        <div className="gallery">
          <Container>
            <div className="gallery-content">
              <div className="gallery-item">
                <img
                  src={require("../../assets/images/gallery-image1.jpg")}
                  alt=""
                  className="responsive-image"
                ></img>
              </div>
              <div className="gallery-item">
                <img
                  src={require("../../assets/images/gallery-image2.jpg")}
                  alt=""
                  className="responsive-image"
                ></img>
              </div>
              <div className="gallery-item">
                <img
                  src={require("../../assets/images/gallery-image3.jpg")}
                  alt=""
                  className="responsive-image"
                ></img>
              </div>
              <div className="gallery-item">
                <img
                  src={require("../../assets/images/gallery-image4.jpg")}
                  alt=""
                  className="responsive-image"
                ></img>
              </div>
              <div className="gallery-item">
                <img
                  src={require("../../assets/images/gallery-image5.jpg")}
                  alt=""
                  className="responsive-image"
                ></img>
              </div>
              <div className="gallery-item">
                <img
                  src={require("../../assets/images/gallery-image6.jpg")}
                  alt=""
                  className="responsive-image"
                ></img>
              </div>
            </div>
            <div className="gallery-button">
              <a
                href="https://www.instagram.com/wafflesbaeanyday/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Show More Images
              </a>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
