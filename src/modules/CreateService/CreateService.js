import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Tabs from 'antd/lib/tabs';
import notification from 'antd/lib/notification';
import PackageCard from './component/packageCard';
import { dataSource, dataSourceAddress } from './dataSource';
const TabPane = Tabs.TabPane;
// const CheckboxGroup = Checkbox.Group;

class CreateService extends Component {
 state = {
     value: 1,
     package: '',
     createNew: false,
     totalPrice: 0,
 }
 onChange = e => {
    console.log(e.target.checked)
    if (e.target.checked) {
        this.setState({totalPrice: this.state.package.packagePrice + 10000})
    } else {
        this.setState({totalPrice: 0})
    }
   
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
  hidePlus = () => {
    this.setState({createNew: true})
  }
  render() {
    return (
      <section className="application-section">
        <Tabs defaultActiveKey="1">
            <TabPane tab="INSTALLATION" key="1" className="allin">
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
                    <div className="defaultAddress" onClick={this.toReview}>
                    <div className="address-header">
                        <div>
                        <span className="address">Address 1</span>
                        </div>
                    </div>
                    <div className="package-application-body">
                    <div className="package-info">
                        <div>
                        <span>
                        Province: {dataSourceAddress.province}
                        </span>
                        </div>
                        <div> 
                        <span>
                        City: {dataSourceAddress.city}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Baranggay: {dataSourceAddress.barangay}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Street No: {dataSourceAddress.streetNo}
                        </span> 
                        </div>
                        <div>
                        <span>
                        Zip Code: {dataSourceAddress.zipCode}
                        </span>
                        </div> 
                    </div>
                    </div>
                    </div>
                    {!this.state.createNew ? 
                    <div className="defaultAddress" onClick={this.hidePlus}>
                    <Icon type="plus-circle" />
                    </div> :
                     <div className="defaultAddress address2" onClick={this.toReview}>
                     <div className="address-header">
                         <div>
                         <span className="address">Address 2</span>
                         </div>
                     </div>
                     <div className="package-application-body">
                     <div className="package-info">
                         <div>
                         <span>
                         Province: <Input/>
                         </span>
                         </div>
                         <div> 
                         <span>
                         City: <Input/>
                         </span>
                         </div>
                         <div> 
                         <span>
                         Baranggay: <Input/>
                         </span>
                         </div>
                         <div> 
                         <span>
                         Street No: <Input/>
                         </span> 
                         </div>
                         <div>
                         <span>
                         Zip Code: <Input/>
                         </span>
                         </div> 
                         <div className="spacer"/>
                         <Button type="primary">Save</Button>
                     </div>
                     </div>
                     </div>
                    }

                </div>
                }
                 {this.state.value === 3 &&
                <div>
                    <PackageCard dataSource={this.state.package} onCardClick={this.toAddress}/>
                    <div className="defaultAddress" onClick={this.toReview}>
                    <div className="address-header">
                        <div>
                        <span className="address">Address 1</span>
                        </div>
                    </div>
                    <div className="package-application-body">
                    <div className="package-info">
                        <div>
                        <span>
                        Province: {dataSourceAddress.province}
                        </span>
                        </div>
                        <div> 
                        <span>
                        City: {dataSourceAddress.city}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Baranggay: {dataSourceAddress.barangay}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Street No: {dataSourceAddress.streetNo}
                        </span> 
                        </div>
                        <div>
                        <span>
                        Zip Code: {dataSourceAddress.zipCode}
                        </span>
                        </div> 
                    </div>
                    </div>
                    </div>
                    <div className="next-btn">
                        <div className="spacer" >
                        <Checkbox
                            onChange={this.onChange}
                        > All in </Checkbox>
                        <em>
                         (Including the processing and materials)</em>
                        </div>
                        <Link to={`/customer-dashboard`} >
                            <Button type="primary" className="spacer" onClick={this.openNotification}>Apply</Button>
                        </Link>
                    </div>
                    <div className="total">
                    {this.state.totalPrice !== 0 &&
                    <div className="spacer"> Total: Php {this.state.totalPrice} </div>
                    }
                    </div>
                </div>
                }
            </TabPane>
            <TabPane tab="REPAIR" key="2" className="repair">
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
                    <div className="defaultAddress" onClick={this.toReview}>
                    <div className="address-header">
                        <div>
                        <span className="address">Address 1</span>
                        </div>
                    </div>
                    <div className="package-application-body">
                    <div className="package-info">
                        <div>
                        <span>
                        Province: {dataSourceAddress.province}
                        </span>
                        </div>
                        <div> 
                        <span>
                        City: {dataSourceAddress.city}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Baranggay: {dataSourceAddress.barangay}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Street No: {dataSourceAddress.streetNo}
                        </span> 
                        </div>
                        <div>
                        <span>
                        Zip Code: {dataSourceAddress.zipCode}
                        </span>
                        </div> 
                    </div>
                    </div>
                    </div>
                    {!this.state.createNew ? 
                    <div className="defaultAddress" onClick={this.hidePlus}>
                    <Icon type="plus-circle" />
                    </div> :
                     <div className="defaultAddress address2" onClick={this.toReview}>
                     <div className="address-header">
                         <div>
                         <span className="address">Address 2</span>
                         </div>
                     </div>
                     <div className="package-application-body">
                     <div className="package-info">
                         <div>
                         <span>
                         Province: <Input/>
                         </span>
                         </div>
                         <div> 
                         <span>
                         City: <Input/>
                         </span>
                         </div>
                         <div> 
                         <span>
                         Baranggay: <Input/>
                         </span>
                         </div>
                         <div> 
                         <span>
                         Street No: <Input/>
                         </span> 
                         </div>
                         <div>
                         <span>
                         Zip Code: <Input/>
                         </span>
                         </div> 
                         <div className="spacer"/>
                         <Button type="primary">Save</Button>
                     </div>
                     </div>
                     </div>
                    }

                </div>
                }
                 {this.state.value === 3 &&
                <div>
                    <PackageCard dataSource={this.state.package} onCardClick={this.toAddress}/>
                    <div className="defaultAddress" onClick={this.toReview}>
                    <div className="address-header">
                        <div>
                        <span className="address">Address 1</span>
                        </div>
                    </div>
                    <div className="package-application-body">
                    <div className="package-info">
                        <div>
                        <span>
                        Province: {dataSourceAddress.province}
                        </span>
                        </div>
                        <div> 
                        <span>
                        City: {dataSourceAddress.city}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Baranggay: {dataSourceAddress.barangay}
                        </span>
                        </div>
                        <div> 
                        <span>
                        Street No: {dataSourceAddress.streetNo}
                        </span> 
                        </div>
                        <div>
                        <span>
                        Zip Code: {dataSourceAddress.zipCode}
                        </span>
                        </div> 
                    </div>
                    </div>
                    </div>
                    
                    <div className="next-btn">
                        <div className="spacer" >
                        <Checkbox
                            onChange={this.onChange}
                        > All in </Checkbox>
                        <em>
                         (Including the processing and materials)</em>
                        </div>
                        <Link to={`/customer-dashboard`} >
                            <Button type="primary" className="spacer" onClick={this.openNotification}>Apply</Button>
                        </Link>
                    </div>
                    <div className="total">
                    {this.state.totalPrice !== 0 &&
                    <div className="spacer"> Total: Php {this.state.totalPrice} </div>
                    }
                    </div>
                </div>
                }
            </TabPane>
        </Tabs>
      </section>
    );
  }
}

export default CreateService;
