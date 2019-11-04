import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Franchise extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="franchise-page">
          <div
            className="franchise-title"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${require("../../assets/images/cover-image4.jpg")})`
            }}
          >
            <h2>Partner With Us</h2>
          </div>
        </div>
        <div className="franchise-content">
          <div className="franchise-top">
            <h3>Franchise</h3>
            <p>
              To Spread the happiness of yummy waffles, we would love to partner
              with people who would like to become a part of our business.
            </p>
            <p>
              Our simple and energetic business concept gives the opportunity
              for everyone to become a successful entrepreneur in the food
              industry for a small investment.
            </p>
            <p>
              The Franchisee services of Waffle'sBae Anyday will commence right
              after the agreement is signed. It includes Site selection, staff
              training, designing of the store, supply of machines and raw
              materials and assistance of franchise team for smooth running of
              the store.
            </p>
          </div>
          <div className="franchise-bottom">
            <div className="franchise-details">
              <h4 className="wb-font-custom">Training</h4>
              <p>
                1 month on the job training will be provided for 3 staffs of the
                franchisees to ensure that they have complete knowledge on the
                menu.
              </p>
              <p>
                Two members consisting a kitchen expert and store supervisor
                will be present at the new store for a month to ensure that all
                the processes and functioning are according to the standards.
              </p>
            </div>
            <div className="franchise-details">
              <h4 className="wb-font-custom">Marketing Activities</h4>
              <p>
                There will be continuous Marketing support from the company
                specifically designed for the outlet according to its consumer
                market.
              </p>
            </div>
            <div className="franchise-details">
              <h4 className="wb-font-custom">Innovative Menu</h4>
              <p>
                We have a wide range of dishes on our menu. Our team regularly
                introduce new items on the menu based on research from
                suggestions and trends in order to keep offering new items to
                our customers.
              </p>
            </div>
            <div className="franchise-details">
              <h4 className="wb-font-custom">Material Supply</h4>
              <p>
                All materials including machines and Raw materials will be
                supplied based on order. There will be an efficient order
                management system in order to make sure that all items on the
                menu are available.
              </p>
            </div>
            <div className="franchise-details">
              <h5>
                Interested to become a partner of Waffle'sBae Anyday family? You
                can Apply here
              </h5>
            </div>
          </div>
        </div>
        <div className="franchise-button">
          <a href="#Franchiseform" className="button">
            Apply Now
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Franchise;
