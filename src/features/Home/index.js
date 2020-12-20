import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionList, Text, View } from 'react-native';

import TaskSummary from '../../components/TaskSummary';

import Theme from '../../Theme';

class Home extends Component {
  render() {
    const sections = [
      {
        title: 'Incomplete Tasks',
        data: [
          {
            title: 'Reserve your spot',
            details: 'Reserve your spot in the camp before April 14th',
            complete: false,
          },
          {
            title: 'Pay camp dues',
            details:
              "Pay $250 so that the camp can purchase materials like water when we're on the Playa!",
            complete: false,
          },
          {
            title: 'Purchase tickets',
            details:
              'There will be three opportunities to purchase tickets. Each member is required to purchase tickets at each event until they have at least one.',
            complete: false,
          },
          {
            title: 'Volunteer for camp activities',
            details:
              'Each camp member must volunteer to help with camp duties on or off the playa. Helping with pre-build means you can have more free time on the Playa.',
            complete: false,
          },
          {
            title: 'Schedule to and from travel',
            details:
              "You'll need to either carpool with another member or take a bus.",
            complete: false,
          },
        ],
      },
      {
        title: 'Complete Tasks',
        data: [
          {
            title: 'Reserve your spot',
            details: 'Reserve your spot in the camp before April 14th',
            complete: true,
          },
        ],
      },
    ];

    return (
      <styles.Host>
        <styles.Summary>
          <styles.SummaryText>Hi Hunter,</styles.SummaryText>
          <styles.SummarySubText>
            Make sure to reserve your spot before April 14
          </styles.SummarySubText>
        </styles.Summary>

        <styles.Tiles
          sections={sections}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={() => <styles.Separator />}
          renderItem={({ item }) => (
            <styles.Task
              title={item.title}
              details={item.details}
              complete={item.complete}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <styles.Title>{title}</styles.Title>
          )}></styles.Tiles>
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

  Tiles: styled(SectionList)`
    background: #fff;
    flex: 1;
  `,

  Title: styled(Text)`
    padding: 14px;
    background: #fff;
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(10, 10, 10);
  `,

  Task: styled(TaskSummary)`
    padding: 0 14px;
  `,

  Separator: styled(View)`
    height: 20px;
  `,
};

export default Home;
