import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';

import Home from './features/Home';

class Router extends Component {
  render() {
    return (
      <NativeRouter style={this.props.style}>
        <Route exact path="/" component={Home} />
      </NativeRouter>
    );
  }
}

export default Router;
