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
      </styles.Host>
    );
  }
}

const styles = {
  Host: styled(View)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,

  Summary: styled(View)`
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
};

export default Home;
