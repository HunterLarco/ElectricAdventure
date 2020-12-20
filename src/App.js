import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import styled from 'styled-components';
import { NativeRouter } from 'react-router-native';
import { SafeAreaView, StatusBar, View } from 'react-native';

import Router from './Router';
import TabBar from './features/TabBar';

import Theme from './Theme';

class App extends Component {
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
      <>
        <StatusBar barStyle="dark-content" />

        <styles.AppHeader style={{ backgroundColor: gradient.start.color }} />

        <styles.AppContainer>
          <styles.BackgroundGradient
            colors={[gradient.start.color, gradient.end.color]}
            start={gradient.start.point}
            end={gradient.end.point}>
            <NativeRouter>
              <styles.Router />
              <styles.TabBar />
            </NativeRouter>
          </styles.BackgroundGradient>
        </styles.AppContainer>

        <styles.AppFooter style={{ backgroundColor: gradient.end.color }} />
      </>
    );
  }
}

const styles = {
  AppContainer: styled(SafeAreaView)`
    background: ${Theme.Colors.Background};
    display: flex;
    flex-direction: column;
    flex: 1;
  `,

  BackgroundGradient: styled(LinearGradient)`
    flex-direction: column;
    flex: 1;
  `,

  AppHeader: styled(SafeAreaView)`
    flex-grow: 0;
  `,

  Router: styled(Router)`
    flex-grow: 1;
  `,

  TabBar: styled(TabBar)`
    flex-shrink: 0;
  `,

  AppFooter: styled(SafeAreaView)`
    flex-grow: 0;
  `,
};

export default App;
