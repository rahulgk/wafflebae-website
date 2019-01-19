import React from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';

import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="menu">
        <Header />
        <div className="menu-page">
          <h2>Our Menu</h2>
        </div>
        <div className="menu-top">
          <div className="heading-title">
            <h2 className="wb-font-custom">WaffleBae Menu</h2>
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
        <div className="menu-nav">
          <Container>
            <Row>
              <Col md="12" lg="4">
                <Nav tabs className="nav-tabs">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Addons
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Waffwich
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '3' })}
                      onClick={() => { this.toggle('3'); }}
                    >
                      Belgian Waffle
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '4' })}
                      onClick={() => { this.toggle('4'); }}
                    >
                      Mini Pancake
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '5' })}
                      onClick={() => { this.toggle('5'); }}
                    >
                      Milk Shake
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '6' })}
                      onClick={() => { this.toggle('6'); }}
                    >
                      Bubble Waffle
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '7' })}
                      onClick={() => { this.toggle('7'); }}
                    >
                      Hot Beverages
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="12" lg="8">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <img className="img-fluid" src="/assets/images/menu-card-1.png" alt=""></img>
                  </TabPane>
                  <TabPane tabId="2">
                    <img className="img-fluid" src="/assets/images/menu-card-2.png" alt=""></img>
                  </TabPane>
                  <TabPane tabId="3">
                    <img className="img-fluid" src="/assets/images/menu-card-3.png" alt=""></img>
                  </TabPane>
                  <TabPane tabId="4">
                    <img className="img-fluid" src="/assets/images/menu-card-4.png" alt=""></img>
                  </TabPane>
                  <TabPane tabId="5">
                    <img className="img-fluid" src="/assets/images/menu-card-5.png" alt=""></img>
                  </TabPane>
                  <TabPane tabId="6">
                    <img className="img-fluid" src="/assets/images/menu-card-6.png" alt=""></img>
                  </TabPane>
                  <TabPane tabId="7">
                    <img className="img-fluid" src="/assets/images/menu-card-7.png" alt=""></img>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
