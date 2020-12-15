import React, { Component } from 'react';
import styled from 'styled-components';
import { NativeRouter } from 'react-router-native';
import { SafeAreaView, StatusBar, View } from 'react-native';

import Router from './Router';
import TabBar from './features/TabBar';

import Theme from './Theme';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <styles.AppContainer>
          <NativeRouter>
            <styles.RouterContainer>
              <Router />
            </styles.RouterContainer>

            <styles.TabBar />
          </NativeRouter>
        </styles.AppContainer>
        <styles.AppFooter />
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

  RouterContainer: styled(View)`
    flex-grow: 1;
  `,

  TabBar: styled(TabBar)`
    flex-shrink: 0;
  `,

  AppFooter: styled(SafeAreaView)`
    background: ${Theme.Colors.NavBar};
    flex-grow: 0;
  `,
};

export default App;
