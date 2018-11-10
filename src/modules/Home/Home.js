import React, { Component } from "react";
import Tabs from 'antd/lib/tabs';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

function callback(key) {
  console.log(key);
}
class Home extends Component {
  state = {
    value: 1,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    
    return (
    <section className="login-section">
      <div className="form-section">
        {/* <Input placeholder="Email"/>
        <Input placeholder="Password"/>
        <Button>Login</Button> */}
        <h1>
          HUSAY
        </h1>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Login" key="1" className="login">
            <Input placeholder="Email" className="email-login"/>
            <Input placeholder="Password" className="password-login"/>
            <Button>Login</Button>
          </TabPane>
          <TabPane tab="Sign up" key="2" className="signup">
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>Employer</Radio>
              <Radio value={2}>Employee</Radio>
            </RadioGroup>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="First name"/>
            <Input placeholder="Last name"/>
            {this.state.value === 2 &&
              <Input placeholder="Profession"/>
            }
            {/* <Input placeholder="Password"/> */}
            <Button>Sign up</Button>
          </TabPane>
        </Tabs>
      </div>
    </section>
    );
  }
}

export default Home;
