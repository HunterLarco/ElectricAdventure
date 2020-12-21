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
        <styles.Content>
          <styles.Title>{this.props.title}</styles.Title>
          <styles.Details>{this.props.details}</styles.Details>
        </styles.Content>

        <styles.Icon name="chevron-right" light size={20} color="#000011" />
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    align-items: center;
    flex-direction: row;
  `,

  Content: styled(View)`
    flex: 1;
  `,

  Title: styled(Text)`
    font-size: 18px;
    font-weight: 700;
  `,

  Details: styled(Text)`
    color: rgb(50, 50, 50);
    font-size: 16px;
  `,

  Icon: styled(FontAwesome5)`
    flex-shrink: 0;
    margin-left: 14px;
  `,
};

export default TaskSummary;
