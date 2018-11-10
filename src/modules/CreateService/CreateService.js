import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import Button from 'antd/lib/button';
import Tabs from 'antd/lib/tabs';
import notification from 'antd/lib/notification';
import PackageCard from './component/packageCard';
import dataSource from './dataSource';
const TabPane = Tabs.TabPane;

class CreateService extends Component {
 state = {
     value: 1,
     package: '',
 }
 toAddress = source => {
     console.log(source)
     this.setState({value: 2, package: source})
 }
 toPackage = () => {
    this.setState({value: 1})
 }
 toReview = () => {
    this.setState({value: 3})
 }
 openNotification = () => {
    notification.config({
        placement: 'bottomRight',
    });
    notification.open({
      message: 'Application Successfull',
      description: 'Your application has been submitted and waiting for approval',
    });
  };
  onCardClick = value => {
      console.log(value)
  }
  render() {
    return (
      <section className="application-section">
        <Tabs defaultActiveKey="1">
            <TabPane tab="ALL IN" key="1" className="allin">
                {this.state.value === 1 &&
                <div>
                    
                    {dataSource.map(item => (
                        <div className={`card ${item.packageName    }`}>
                        <PackageCard dataSource={item} onCardClick={this.toAddress}/>
                        </div>
                    ))}
                    <h4>Pick a package</h4>
                    {/* <div className="next-btn">
                        <Button type="primary" onClick={this.toAddress}>Next</Button>
                    </div> */}
                </div>
                }    
                {this.state.value === 2 &&
                <div>
                    <span>Set installation address</span>
                    <div className="next-btn">
                        <Button type="primary" onClick={this.toPackage}>Back</Button>
                        <Button type="primary" onClick={this.toReview}>Next</Button>
                    </div>
                </div>
                }
                 {this.state.value === 3 &&
                <div>
                    <span>Review application</span>
                    <div className="next-btn">
                        <Button type="primary" onClick={this.toAddress}>Back</Button>
                        <Link to={`/customer-dashboard`} >
                            <Button type="primary" onClick={this.openNotification}>Apply</Button>
                        </Link>
                    </div>
                </div>
                }
            </TabPane>
            <TabPane tab="REPAIR" key="2" className="repair">Content of Tab Pane 2</TabPane>
        </Tabs>
      </section>
    );
  }
}

export default CreateService;
