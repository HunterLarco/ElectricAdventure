import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import React, { Component } from 'react';
import styled from 'styled-components';
import { ScrollView, Text, View } from 'react-native';

import TaskSummary from '../../components/TaskSummary';

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

        <styles.Tiles>
          <styles.TilePadding>
            <styles.Header>
              <styles.Title>12 Incomplete Tasks</styles.Title>
            </styles.Header>

            <styles.Task
              title="Reserve your spot"
              details="Reserve your spot in the camp before April 14th"
            />
            <styles.Task
              title="Pay camp dues"
              details="Pay $250 so that the camp can purchase materials like water when we're on the Playa!"
            />
            <styles.Task
              title="Purchase tickets"
              details="There will be three opportunities to purchase tickets. Each member is required to purchase tickets at each event until they have at least one."
            />
            <styles.Task
              title="Volunteer for camp activities"
              details="Each camp member must volunteer to help with camp duties on or off the playa. Helping with pre-build means you can have more free time on the Playa."
            />
            <styles.Task
              title="Schedule to and from travel"
              details="You'll need to either carpool with another member or take a bus."
            />
          </styles.TilePadding>
        </styles.Tiles>
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
    flex-shrink: 0;
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

  Tiles: styled(ScrollView)`
    background: #fff;
    flex: 1;
  `,

  TilePadding: styled(View)`
    padding: 14px;
  `,

  Header: styled(View)`
    align-items: center;
    flex-direction: row;
  `,

  Title: styled(Text)`
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(10, 10, 10);
  `,

  Task: styled(TaskSummary)`
    margin-top: 20px;
  `,
};

export default Home;
