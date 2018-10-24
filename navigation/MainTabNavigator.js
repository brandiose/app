import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BrandsScreen from '../screens/BrandsScreen';
import StacksScreen from '../screens/StacksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BrandsStack = createStackNavigator({
  Brands: BrandsScreen,
});

BrandsStack.navigationOptions = {
  tabBarLabel: 'My Brands',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : '-outline'}`
          : 'md-person'
      }
    />
  ),
};

const StacksStack = createStackNavigator({
  Stacks: StacksScreen,
});

StacksStack.navigationOptions = {
  tabBarLabel: 'Stacks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-albums${focused ? '' : '-outline'}` : 'md-albums'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  BrandsStack,
  StacksStack,
  SettingsStack,
});
