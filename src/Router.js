import React, { Component } from 'react';
import { Route } from 'react-router-native';
import { View } from 'react-native';

import CampInfo from './features/CampInfo';
import Home from './features/Home';

class Router extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Route path="/home" component={Home} />
        <Route path="/campinfo" component={CampInfo} />
      </View>
    );
  }
}

export default Router;
