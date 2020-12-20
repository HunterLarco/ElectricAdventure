import React, { Component } from 'react';
import styled from 'styled-components';
import { NativeRouter } from 'react-router-native';
import { SafeAreaView, StatusBar, View } from 'react-native';

import AppHeader from './features/AppHeader';
import Router from './Router';
import TabBar from './features/TabBar';

import Theme from './Theme';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />

        <styles.BackgroundHeader style={{ backgroundColor: '#B588F6' }} />

        <styles.AppHeader />

        <styles.AppContainer>
          <NativeRouter>
            <styles.Router />
            <styles.TabBar />
          </NativeRouter>
        </styles.AppContainer>
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

  AppHeader: styled(AppHeader)`
    flex-shrink: 0;
  `,

  BackgroundHeader: styled(SafeAreaView)`
    flex-grow: 0;
  `,

  Router: styled(Router)`
    flex-grow: 1;
  `,

  TabBar: styled(TabBar)`
    flex-shrink: 0;
  `,

  BackgroundFooter: styled(SafeAreaView)`
    flex-grow: 0;
  `,
};

export default App;
