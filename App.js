import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantDetail: RestaurantDetailScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);
