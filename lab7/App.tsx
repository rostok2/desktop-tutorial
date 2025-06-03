import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TouchFeedbackScreen from './screens/TouchFeedbackScreen';
import ScrollExampleScreen from './screens/ScrollExampleScreen';
import SwipeListScreen from './screens/SwipeListScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'ios-hand';
          if (route.name === 'Touch') {
            iconName = 'ios-hand';
          } else if (route.name === 'Scroll') {
            iconName = 'ios-list';
          } else if (route.name === 'Swipe') {
            iconName = 'ios-swap-horizontal';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false
      })}>
        <Tab.Screen name="Touch" component={TouchFeedbackScreen} />
        <Tab.Screen name="Scroll" component={ScrollExampleScreen} />
        <Tab.Screen name="Swipe" component={SwipeListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
