import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View></View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default App;
