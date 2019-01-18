import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';

class Gallery extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="gallery-page">
                    <h2>Gallery</h2>
                </div>
                <div className="gallery">
                    <Container>
                        <div className="gallery-content">
                            <div className="gallery-item">
                                <img src="/assets/images/gallery-image1.jpg" alt="" className="responsive-image"></img>
                            </div>
                            <div className="gallery-item">
                                <img src="/assets/images/gallery-image2.jpg" alt="" className="responsive-image"></img>
                            </div>
                            <div className="gallery-item">
                                <img src="/assets/images/gallery-image3.jpg" alt="" className="responsive-image"></img>
                            </div>
                            <div className="gallery-item">
                                <img src="/assets/images/gallery-image4.jpg" alt="" className="responsive-image"></img>
                            </div>
                            <div className="gallery-item">
                                <img src="/assets/images/gallery-image5.jpg" alt="" className="responsive-image"></img>
                            </div>
                            <div className="gallery-item">
                                <img src="/assets/images/gallery-image6.jpg" alt="" className="responsive-image"></img>
                            </div>
                        </div>
                        <div className="gallery-button">
                            <a href="https://www.instagram.com/wafflebaeofficial/" className="button">Show More Images</a>
                        </div> 
                    </Container>   
                </div>
                <Footer />
            </div>
        );
    }
}

export default Gallery;
