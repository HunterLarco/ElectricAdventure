import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-native';
import { View } from 'react-native';

import TabBar from '../components/TabBar';
import TabBarItem from '../components/TabBarItem';

class TabBarFeature extends Component {
  render() {
    return (
      <TabBar style={this.props.style}>
        <Link to="/todos">
          <TabBarItem icon="list-alt" label="Todos" />
        </Link>

        <Link to="/campinfo">
          <TabBarItem icon="campground" label="Camp Info" />
        </Link>

        <TabBarItem icon="comments" label="Messages" />
        <TabBarItem icon="user" label="Profile" />
      </TabBar>
    );
  }
}

export default TabBarFeature;
