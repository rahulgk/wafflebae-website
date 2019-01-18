import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="about-page">
                    <h2>About Us</h2>
                </div>
                <div className="about-top">
                    <div className="heading-title">
                        <h2 className="wb-font-custom">About WaffleBae</h2>
                    </div>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum.
                        </p>
                    </div>
                </div>
                <div className="about-bottom">
                    <Container>
                        <Row>
                            <Col md="12" lg="6">
                                <div className="heading-title">
                                    <h2 className="wb-font-custom">Our story</h2>
                                </div>
                                <div className="text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum.
                                    </p>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className="wb-item">
                                    <img className="img-fluid" src="/assets/images/image9.jpg" alt="#"></img>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
