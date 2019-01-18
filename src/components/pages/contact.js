import React, { Component } from 'react';

import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="contact-page">
                    <h2>Contact Us</h2>
                </div>
                <div className="contact-top">
                    <div className="heading-title">
                        <h2 className="wb-font-custom">Contact WaffleBae</h2>
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
                <Footer />
            </div>
        );
    }
}

export default Contact;
