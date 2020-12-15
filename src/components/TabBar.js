import React, { Component } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import Theme from '../Theme';

class TabBar extends Component {
  render() {
    return (
      <styles.Host style={this.props.style}>{this.props.children}</styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    background: ${Theme.Colors.NavBar};
    border-top-color: ${Theme.Colors.NavBarDivider};
    border-top-width: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
  `,
};

export default TabBar;
