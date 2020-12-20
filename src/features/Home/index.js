import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';

import Theme from '../../Theme';

class Home extends Component {
  render() {
    return (
      <styles.Host>
        <styles.Summary>
          <styles.SummaryText>Hi Hunter,</styles.SummaryText>
          <styles.SummarySubText>
            Make sure to RSVP before 4/18
          </styles.SummarySubText>
        </styles.Summary>

        <styles.Todos>
          <Text style={{ color: '#000' }}>Home</Text>
        </styles.Todos>
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    background: ${Theme.Colors.NavBarSelected};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,

  Summary: styled(View)`
    flex-grow: 1;
    padding: 16px 14px;
  `,

  SummaryText: styled(Text)`
    color: ${Theme.Fonts.HomeSummary.Color};
    font-size: ${Theme.Fonts.HomeSummary.Size};
  `,

  SummarySubText: styled(Text)`
    color: ${Theme.Fonts.HomeSummarySub.Color};
    font-size: ${Theme.Fonts.HomeSummarySub.Size};
  `,

  Todos: styled(View)`
    background: ${Theme.Colors.Background};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    flex-shrink: 0;
    height: 60%;
  `,
};

export default Home;
