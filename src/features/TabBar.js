import React, { Component } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import TabBar from '../components/TabBar';
import TabBarItem from '../components/TabBarItem';

class TabBarFeature extends Component {
  render() {
    return (
      <TabBar style={this.props.style}>
        <TabBarItem icon="list-alt" label="Todos" route="/todos" />
        <TabBarItem icon="campground" label="Camp Info" route="/campinfo" />
        <TabBarItem icon="comments" label="Messages" route="/messages" />
        <TabBarItem icon="user" label="Profile" route="/user" />
      </TabBar>
    );
  }
}

export default TabBarFeature;
