import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';
import FullWidthLoading from 'ubidy_ui_kit/lib/FullWidthLoading';

import {
  getBlogEpic,
  getBlogCancel,
  postBlogEpic,
  postBlogCancel,
} from 'Actions/queries/blog/blog.action';

class Test extends Component {
  componentWillUnmount() {
    if (this.props.loading) {
      this.props.getBlogCancel();
    }
  }

  onGetPost = () => {
    this.props.getBlogEpic();
  };

  onGetCancel = () => {
    this.props.getBlogCancel();
  };

  onPostBlog = () => {
    this.props.postBlogEpic({ id: 312312 });
  };

  onPostCancel = () => {
    this.props.postBlogCancel();
  };

  render() {
    return (
      <section className="Test-section">
        {/* {this.props.loading && <FullWidthLoading type="Spin" />} */}

        <h3>Yow! im a test component and route</h3>

        <Button type="primary" onClick={this.onGetPost}>
          get blog
        </Button>

        <Button type="primary" onClick={this.onGetCancel}>
          Cancel get blog
        </Button>

        <hr />
        <hr />

        <Button type="primary" onClick={this.onPostBlog}>
          post blog
        </Button>

        <Button type="primary" onClick={this.onPostCancel}>
          cancel post blog
        </Button>
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
  {
    getBlogEpic,
    getBlogCancel,
    postBlogEpic,
    postBlogCancel,
  },
)(Test);
