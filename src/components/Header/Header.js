import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

class Header extends Component {
  render() {
    return (
      <section className="Header-section">
        <h1> Aboitiz </h1>
        {/* <Input placeholder="Keyword" className="search"/> */}
        <Button icon="home"> HOME </Button>
        <Link to={`/service-application`} >
          <Button icon="form" className="services"> APPLY SERVICES</Button>
        </Link>
        <div className="right-panel">
          <Link to={`/customer-dashboard`} >
            <h5>Jose Carlo San Pedro</h5>
          </Link>
          <Icon type="notification" />
          <Icon type="setting" />
        </div>
        {/* Starter Kit
        <Link to="/"> Home </Link>
        <Link to="/test"> Test </Link> */}
      </section>
    );
  }
}

export default Header;
