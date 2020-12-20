import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, Text, View } from 'react-native';

class ReturningTile extends Component {
  render() {
    return (
      <styles.Host style={this.props.style}>
        <styles.Due>Due before April 15th</styles.Due>
        <styles.Title>Will you be joining us in 2021?</styles.Title>
        <styles.Details>
          We have limited slots available for our camp and before we fill them
          with new members, we want to give you a moment to hop onboard! Please
          RSVP before April 15th when we will no longer reserve a spot for you.
        </styles.Details>
        <styles.Buttons>
          <styles.NoButton>
            <styles.ButtonText>No</styles.ButtonText>
          </styles.NoButton>
          <styles.YesButton>
            <styles.ButtonText>Yes</styles.ButtonText>
          </styles.YesButton>
        </styles.Buttons>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.05);
  `,

  Due: styled(Text)`
    color: #6a6a6a;
    padding: 8px;
    text-transform: uppercase;
  `,

  Title: styled(Text)`
    font-size: 20px;
    font-weight: 700;
    padding: 0 8px;
  `,

  Details: styled(Text)`
    color: #6a6a6a;
    padding: 8px;
  `,

  Buttons: styled(View)`
    display: flex;
    flex-direction: row;
    padding: 0 8px 8px 8px;
  `,

  NoButton: styled(TouchableOpacity)`
    background: #e91e63;
    border-radius: 4px;
    flex-grow: 1;
    margin-right: 8px;
    overflow: hidden;
    padding: 10px;
  `,

  YesButton: styled(TouchableOpacity)`
    background: #4caf50;
    border-radius: 4px;
    flex-grow: 3;
    overflow: hidden;
    padding: 10px;
  `,

  ButtonText: styled(Text)`
    color: #fff;
    font-weight: 700;
    text-align: center;
  `,
};

export default ReturningTile;
