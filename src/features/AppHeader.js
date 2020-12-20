import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionList, Text, TouchableOpacity, View } from 'react-native';

class AppHeader extends Component {
  render() {
    const gradient = {
      start: {
        color: '#B588F6',
        point: {
          x: 0,
          y: 0,
        },
      },

      end: {
        color: '#9B6DFD',
        point: {
          x: 0,
          y: 1,
        },
      },
    };

    return (
      <styles.Host
        style={this.props.style}
        colors={[gradient.start.color, gradient.end.color]}
        start={gradient.start.point}
        end={gradient.end.point}>
        <styles.WelcomeText>Hi Hunter,</styles.WelcomeText>

        <styles.CallToAction>
          <styles.FlavorText>
            Make sure to reserve your spot before April 14
          </styles.FlavorText>

          <styles.Icon name="chevron-right" light size={20} color="#EAEAFF" />
        </styles.CallToAction>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(LinearGradient)``,

  WelcomeText: styled(Text)`
    color: #ffffff;
    font-size: 40px;
    padding: 16px 14px 0 14px;
  `,

  CallToAction: styled(TouchableOpacity)`
    align-items: center;
    flex-direction: row;
    padding: 8px 14px 16px 14px;
  `,

  FlavorText: styled(Text)`
    color: #eaeaff;
    flex: 1;
    font-size: 16px;
  `,

  Icon: styled(FontAwesome5)`
    flex-shrink: 0;
    margin-left: 8px;
  `,
};

export default AppHeader;
