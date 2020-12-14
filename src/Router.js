import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';

import Home from './features/Home';

class Router extends Component {
  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={Home} />
      </NativeRouter>
    );
  }
}

export default Router;
