import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../../../types/navigationTypes';

import HomeScreen from './homeScreen';
import AddNote from './addNote';

import {Colors, Size} from '../../core/constants';
import CustIcon from '../../components/CustIcon';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.mainActiveRed,
        inactiveTintColor: Colors.mainDimGray,
        labelPosition: 'below-icon',
        style: {
          height: 60,
          borderTopWidth: 1,
          paddingBottom: 10,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarVisible: true,
          tabBarIcon: tabInfo => (
            <CustIcon
              type={'material'}
              name="home"
              size={Size.navIconSize}
              color={
                tabInfo.focused ? Colors.mainActiveRed : Colors.mainDimGray
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddNote}
        options={{
          tabBarLabel: 'Add',
          tabBarVisible: true,
          tabBarIcon: tabInfo => (
            <CustIcon
              type={'material'}
              name="home"
              size={Size.navIconSize}
              color={
                tabInfo.focused ? Colors.mainActiveRed : Colors.mainDimGray
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AddNote}
        options={{
          tabBarLabel: 'Setting',
          tabBarVisible: true,
          tabBarIcon: tabInfo => (
            <CustIcon
              type={'material'}
              name="home"
              size={Size.navIconSize}
              color={
                tabInfo.focused ? Colors.mainActiveRed : Colors.mainDimGray
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
