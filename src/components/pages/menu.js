import React from "react";
import { Container } from "reactstrap";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="menu-page">
          <div
            className="menu-title"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${require("../../assets/images/cover-image2.jpg")})`
            }}
          >
            <h2>Our Menu</h2>
          </div>
        </div>
        <div className="menu">
          <Container>
            <div className="menu-content">
              <div className="menu-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/menu-item1.jpg")}
                  alt=""
                ></img>
                <div className="menu-content-text">
                  <h4 className="wb-font-custom">Waffwiches</h4>
                  <p>
                    2 crispy quarter sized waffles sandwiched with fillings in
                    between. Our fillings range from IceCreams to Chocolate
                    fillings such as Raffaello, which is our best seller item on
                    the menu.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/menu-item2.jpg")}
                  alt=""
                ></img>
                <div className="menu-content-text">
                  <h4 className="wb-font-custom">Belgian Waffles</h4>
                  <p>
                    Authentic, round, full sized waffles served icecream and
                    whipped cream. The quantity is huge and is often enjoyed by
                    our customers as a full meal. Our Banoffee waffle, which is
                    topped with cream made from Bananas and Milk toffee, topped
                    with icecream and caramelised nuts is one of our favourite
                    items.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/menu-item3.jpg")}
                  alt=""
                ></img>
                <div className="menu-content-text">
                  <h4 className="wb-font-custom">Bubble Waffles</h4>
                  <p>
                    Eggettes is a variety of waffle that originated in Honkong.
                    Later on many changes and ideas were brought in to this
                    concept and is being served in many parts of the world as
                    Bubble Waffles. So, we thought to introduce this ‘not very
                    common’ dish to kochi in our unique style. At present we
                    have 6 different types of Bubble waffles that are being
                    served at the store, and we are in the process of adding
                    more to it.{" "}
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/menu-item4.jpg")}
                  alt=""
                ></img>
                <div className="menu-content-text">
                  <h4 className="wb-font-custom">Mini Pancakes</h4>
                  <p>
                    Our Mini Pancakes are cute little rounds of yumminess which
                    are just a mini version of pancakes. One order consists of
                    12 mini pancakes and topings vary from syrup, honey and
                    chocolate to our inhouse prepared signature topping called
                    Cheesy Cream.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/menu-item5.jpg")}
                  alt=""
                ></img>
                <div className="menu-content-text">
                  <h4 className="wb-font-custom">Crepes</h4>
                  <p>
                    As a result of enquiries from many of our customers, we are
                    in the process of introducing our crepe menu. Our crepes
                    will be served hot with different varieties sauces as
                    toppings, Icecream, Whipped Cream and Fresh Cut Fruits.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <img
                  className="responsive-image"
                  src={require("../../assets/images/menu-item6.jpg")}
                  alt=""
                ></img>
                <div className="menu-content-text">
                  <h4 className="wb-font-custom">Savoury Waffles</h4>
                  <p>
                    To all the people without a sweet tooth, we need to ensure
                    that Waffle is still BAE! As a result, our Savoury waffle
                    menu is under prep to make WaffleBae a favourite spot for
                    the people who love Spice and Cheese Flavours too. Our
                    Savoury menu will consist of Pizza Waffles, Waffle
                    Sandwiches and Savoury Crepes
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
