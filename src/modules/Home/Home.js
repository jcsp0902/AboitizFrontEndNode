import React, { Component } from 'react'
import { dataSource , packages } from './dataSource';
import isEqual from 'lodash/isEqual';
import PackageCard from '../../components/PackageCard';


class Home extends Component {
  state = {
    dataSource: [],
  };

  componentDidMount() {
    this.setState({
      dataSource,
    })
  }

  handleSave = id => {
    this.props.history.push("/service-application")    
  }

  handleCancel = id => {
    const datas = this.state.dataSource;
    const newDatas = datas.filter(item => !isEqual(item.applicationId, id))
    console.log('newDatas', newDatas)
    this.setState({
      dataSource: newDatas,
    })
  }

  render() {

    return (
      <section className="home-section">
        {this.state.dataSource.map(data => 
          <PackageCard dataSource={data} onSave={this.handleSave} onCancel={this.handleCancel} />
        )}
      </section>
    )
  }
}

export default Home;

// {dataSource.map(data => 
//   <PackageCard dataSource={data} />
// )}