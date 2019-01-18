import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';

class Franchise extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="franchise-page">
                    <h2>Partner with us</h2>
                </div>
                <div className="franchise-top">
                    <Container>
                        <Row>
                            <Col md="12" lg="6" className="align-self-center">
                                <div className="heading-title">
                                    <h2 className="wb-font-custom">Partner with Wafflebae</h2>
                                </div>
                            </Col>
                            <Col md="12" lg="6">
                                <div className="content">
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
                        </Row>
                    </Container>
                </div>
                <div className="franchise-bottom">
                    <Container>
                        <Row>
                            <Col md="12" lg="6">
                                <div className="heading-title">
                                    <h2 className="wb-font-custom">Start a franchise</h2>
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
                                    <img className="img-fluid" src="/assets/images/image2.jpg" alt="#"></img>
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

export default Franchise;
