import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemListScreen from './screens/ItemListScreen';
import LocationScreen from './screens/LocationScreen';
import UserInputScreen from './screens/UserInputScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'ios-list';
          if (route.name === 'Items') {
            iconName = 'ios-list';
          } else if (route.name === 'Location') {
            iconName = 'ios-locate';
          } else if (route.name === 'Input') {
            iconName = 'ios-create';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false
      })}>
        <Tab.Screen name="Items" component={ItemListScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="Input" component={UserInputScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
