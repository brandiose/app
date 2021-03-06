import React from 'react';
import {
  Platform,
  Text
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import BrandsScreen from '../screens/BrandsScreen';
import StacksScreen from '../screens/StacksScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

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
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected
  }
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
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected
  }
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search'}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected
  }
};

const NotificationsStack = createStackNavigator({
  Notifications: NotificationsScreen,
});

NotificationsStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications'}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected
  }
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
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected
  }
};

export default createBottomTabNavigator({
  BrandsStack,
  StacksStack,
  SearchStack,
  NotificationsStack,
  SettingsStack,
});
