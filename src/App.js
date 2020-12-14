import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import Router from './Router.js';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Router />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
