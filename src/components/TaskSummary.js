import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';

class TaskSummary extends Component {
  static propTypes = {
    title: PropTypes.string.required,
    details: PropTypes.string.required,
    complete: PropTypes.bool,
  };

  render() {
    return (
      <styles.Host style={this.props.style}>
        <styles.Title>{this.props.title}</styles.Title>
        <styles.Details>{this.props.details}</styles.Details>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)``,

  Title: styled(Text)`
    font-size: 18px;
    font-weight: 700;
  `,

  Details: styled(Text)`
    color: rgb(50, 50, 50);
    font-size: 16px;
  `,
};

export default TaskSummary;
