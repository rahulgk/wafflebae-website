import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-page">
          <div
            className="about-title"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${require("../../assets/images/cover-image1.jpg")})`
            }}
          >
            <h2>About Us</h2>
          </div>
        </div>
        <div className="story-content">
          <h3>Our Story</h3>
          <p>
            Waffle'sBae Anyday has been a game changer in the comfort food
            category since its launch in 2018 in Kochi by introducing different
            vaieties of waffles, Mini Pancakes and Milkshakes. In a market where
            majority of the people are not familiar with waffles or pancakes,
            Waffle'sBae Anyday has become a well recognised brand within a short
            timespan.
          </p>
          <p>
            It all started as the dream of a young MBA graduate from Kochi to
            venture into the business world and set up something on his own.
            Having spent a good amount if time in different parts of India and
            middle east, the founder of Waffle'sBae Anyday, Riyas Kamarudeen had
            legitimate knowledge on the differences in market offerings of these
            places. After realising that there is a potential for a pocket
            friendly Waffle restaurant in Kochi, he introduced an exclusive
            waffle brand to the people of Kochi. Despite the compulsion from
            folks and well-wishers to take up a franchise of any established
            waffle brand, Riyas decided to create his own Brand in a style that
            is different and unique.After spending several months for travel,
            discussions with food experts and research, Waffle'sBae Anyday with
            its Teal Blue and Bright Yellow branding was introduced to the
            people of Kochi in May 2018.
          </p>
          <p>
            Since then, Waffle'sBae Anyday has become a well recognised brand in
            Kochi that serves variety of Waffles such as Belgian Waffles, Waffle
            Sandwiches, Bubble Waffles, Mini Pancakes and Milk Shakes. Our
            Milkshakes are served under a different brand name called Bae B
            Shakes.
          </p>
          <p>
            Waffle'sBae Anyday currently has 2 stores in Kochi and are in talks
            with potential franchisees to expand to other parts of the state.
            We’d love to spread the happiness by taking the presence of
            Waffle'sbae Anyday to many more places in India and Middle East.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
