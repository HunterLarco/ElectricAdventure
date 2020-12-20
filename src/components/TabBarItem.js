import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { withRouter } from 'react-router-native';

import Theme from '../Theme';

class TabBarItem extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  };

  render() {
    const selected = this.props.history.location.pathname.startsWith(
      this.props.route
    );

    const color = selected
      ? Theme.Colors.NavBarSelected
      : Theme.Colors.NavBarDefault;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.redirect_();
        }}>
        <styles.Host style={this.props.style}>
          <styles.Icon
            name={this.props.icon}
            light={!selected}
            solid={selected}
            size={19}
            color={color}
          />
          <styles.Label style={{ color }}>{this.props.label}</styles.Label>
        </styles.Host>
      </TouchableWithoutFeedback>
    );
  }

  redirect_() {
    this.props.history.push(this.props.route);
  }
}

const styles = {
  Host: styled(View)`
    align-items: center;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    flex-grow: 1;
  `,

  Icon: styled(FontAwesome5)``,

  Label: styled(Text)`
    font-size: ${Theme.Fonts.NavBarItem.Size};
    margin-top: 6px;
  `,
};

export default withRouter(TabBarItem);
