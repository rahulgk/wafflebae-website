import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="home-page">
                    <h4 class="text-uppercase">Your bae is here</h4>
                    <h1>WaffleBae</h1>
                    <p>An exclusive waffle shop in Kochi.</p>
                    <NavLink href="#Menu" className="button">View Menu</NavLink>
                </div>
                <div className="about-section">
                    <Container>
                        <Row>
                            <Col md="12" lg="6" className="align-self-center">
                                <div className="heading-title">
                                    <small className="wb-font-custom">Wafflebae</small>
                                    <h2>It's Tasty &amp; <span className="wb-font-custom">Irresistible</span></h2>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            </Col>
                            <Col md="12" lg="6">
                                <div className="wb-item">
                                    <img className="img-fluid" src="/assets/images/image1.jpg" alt=""></img>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="banner1"></div>
                <div className="speciality-section">
                    <div className="heading-title">
                        <small className="wb-font-custom">Wafflebae</small>
                        <h2>We Believe In <span className="wb-font-custom">Quality</span></h2>
                    </div>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos!
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Homepage;
