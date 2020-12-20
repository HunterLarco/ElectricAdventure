import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';

class TaskSummary extends Component {
  render() {
    return (
      <styles.Host style={this.props.style}>
        <styles.Icon name="circle" light size={30} />
        <styles.Content>
          <styles.Title>{this.props.title}</styles.Title>
          <styles.Details>{this.props.details}</styles.Details>
        </styles.Content>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    flex-direction: row;
    overflow: hidden;
    flex-wrap: wrap;
  `,

  Icon: styled(FontAwesome5)`
    flex-shrink: 0;
    margin-right: 10px;
    margin-top: 4px;
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
};

export default TaskSummary;
