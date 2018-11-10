import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Test extends Component {
 
  render() {
    return (
      <section className="application-section">
        <Tabs defaultActiveKey="1">
            <TabPane tab="ALL IN" key="1">
              
            </TabPane>
            <TabPane tab="REPAIR" key="2">Content of Tab Pane 2</TabPane>
        </Tabs>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blogs.blogs,
    loading: state.blogs.loading,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Test);
