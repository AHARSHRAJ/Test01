import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WelcomePage from './WelcomePage';
import TabBarContainer from './TabbedPage';

const DemoStack = createStackNavigator(
  {
    Welcome: { screen: WelcomePage },
    Tabbed: { screen: TabBarContainer },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false, // Disable Swipe Gesture
    },
    transitionConfig: () => ({ 
      transitionSpec: {
        duration: 0, // Disable Transition Animation
      },
    }),
  }
);

export default DemoStack;
