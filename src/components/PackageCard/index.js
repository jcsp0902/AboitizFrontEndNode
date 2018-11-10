import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual'

const propTypes = {
  dataSource: PropTypes.shape({
    location: PropTypes.string,

  }),
}


class PackageCard extends Component {
  state = {
    mode: 0,
    dataSource: {
      location: "",
      status: "",
      packegPrice: 0,
      service: "",
      details: [],
      type: "",
    },
    isViewMore: false,
    numToShow: 4,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps.dataSource', nextProps.dataSource)
    if (!isEqual(nextProps.dataSource, prevState.dataSource)) {
      return {
        dataSource: nextProps.dataSource
      }
    }
    
    return null;
  }

  handleViewMore = () => {
    this.setState(prevState => ({
      isViewMore: !prevState.isViewMore,
      numToShow: !prevState.isViewMore ? prevState.dataSource.details.length : 4,
    }))
  }

  render() {
    const {
      handleEdit,
      handleSave,
      handleCancel,
    } = this.props;
    const {
      dataSource,
      mode,
      isViewMore,
      numToShow,
    } = this.state
    const detailsSlice = dataSource.details.slice(0, numToShow);
    const detailsRender = detailsSlice.map(item => {
      return <div className="item">{item}</div>
    })
    return (
    <section className="package-card">
      <div className="package-header">
        <div className={`${dataSource.status.toLowerCase()}`}>
          <span className="status">{dataSource.status.toUpperCase()}</span>
        </div>
      </div>
      <div className="package-body">
      <div className="package-info">
        <div className="location">
          <span className="title">Location:</span> {dataSource.location}
        </div>
        
        <div className="price">
        <span className="title">
          Package Price: {' '} 
        </span> 
          Php {dataSource.packagePrice}
        </div>
        
        <div className="service">
        <span className="title">
          Service: 
        </span>
          {dataSource.service}
        </div>

        <div className="type">
          <span className="title">
          Type: {' '}
          </span>
          {dataSource.type}
        </div>
        
        <div className="details">
          <span className="title">Package Details: </span> 
          <div className="items">
            {detailsRender}
          </div>
          <button
            className="view-more-action"
            onClick={this.handleViewMore}
          >
            View {isViewMore ? 'Less' : 'More'}
          </button>
        </div>
      </div>
      </div>
      <div className="package-footer">
      {
        mode === 0 ?
        <div className="action-body">
          <button
            className="action"
            onClick={this.handleEdit}
          >
            Edit Details
          </button>
          <button
            className="action"
          >
            Cancel Application
          </button>
        </div> 
        :
        <div className="action-body">
          <button
            className="action"
            onClick={this.handleSave}
          >
            Save Details
          </button>
        </div>
        }
        </div> 
    </section>
    )
  }
}

export default PackageCard;