import React, { Component } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import TabBar from '../components/TabBar';
import TabBarItem from '../components/TabBarItem';

class TabBarFeature extends Component {
  render() {
    return (
      <TabBar style={this.props.style}>
        <TabBarItem icon="list-alt" label="Todos" />
        <TabBarItem icon="campground" label="Camp Info" />
        <TabBarItem icon="comments" label="Messages" />
        <TabBarItem icon="user" label="Profile" />
      </TabBar>
    );
  }
}

export default TabBarFeature;
