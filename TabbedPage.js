import React from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Demo1Page from './Demo1Page';
import Demo2Page from './Demo2Page';

const TabbedPage = TabNavigator(
  {
    Tab1: {
      screen: Demo1Page,
    },
    Tab2: {
      screen: Demo2Page,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#E87E90',
      showLabel: false,
      showIcon: true,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 33,
    height: 33,
  },
});

export default TabbedPage;