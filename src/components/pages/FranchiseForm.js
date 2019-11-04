import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Franchiseform extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="franchise-form-page">
          <div
            className="franchise-form-title"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${require("../../assets/images/cover-image5.jpg")})`
            }}
          >
            <h2>Application</h2>
          </div>
        </div>
        <div className="franchise-form">
          <iframe
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdBd5gkjYvmPu1hfXwzKcgXjTsGh37gZxcQYPhj2AOT6FQRIQ/viewform?embedded=true"
            width="640"
            height="1311"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Franchiseform;
