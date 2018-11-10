import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';

class Header extends Component {
  render() {
    return (
      <section className="Header-section">
        <h1> Aboitiz </h1>
        <Input placeholder="Keyword" className="search"/>
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
