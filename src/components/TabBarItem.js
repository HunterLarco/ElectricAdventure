import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';

import Theme from '../Theme';

class TabBarItem extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <styles.Host style={this.props.style}>
        <styles.Icon
          name={this.props.icon}
          size={19}
          color={Theme.Colors.SoftWhite}
        />
        <styles.Label>{this.props.label}</styles.Label>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    align-items: center;
    display: flex;
    flex-direction: column;
  `,

  Icon: styled(FontAwesome5)``,

  Label: styled(Text)`
    color: ${Theme.Colors.SoftWhite};
    font-size: ${Theme.Fonts.NavBarItem.Size};
    margin-top: 10px;
  `,
};

export default TabBarItem;
