import React, { Component } from 'react';
import styled from 'styled-components';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

class ReserveYourSpot extends Component {
  render() {
    return (
      <styles.Host>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>test</Text>
        </SafeAreaView>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)``,
};

export default ReserveYourSpot;
