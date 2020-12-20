import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';

class CampInfo extends Component {
  render() {
    return (
      <styles.Host>
        <Text style={{ color: '#000' }}>CampInfo</Text>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    flex-grow: 1;
  `,
};

export default CampInfo;
