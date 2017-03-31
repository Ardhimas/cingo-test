import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basicActionCreators from './actions/basic';
import { Button } from 'react-bootstrap';

class IncrementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.basic.isOpen) {
      this.props.basicActions.closeButton()
    } else {
      this.props.basicActions.openButton()
    }
  }

  render() {
    return (
      <Button onClick={this.handleClick} active={this.state.isToggleOn} bsStyle="warning">
        {this.props.basic.isOpen ? 'Open' : 'Closed'}
      </Button>
    );
  }
}

// This is the redux section of the web app, you can ignore this for now.
const mapStateToProps = (state) => ({
  basic  : state.basic,
});

const mapDispatchToProps = (dispatch) => ({
  basicActions : bindActionCreators(basicActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncrementComponent);
