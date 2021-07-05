import * as React from 'react';

//Module Imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigationTypes';

// Screen Imports

//Auth Screens
import Register from './screens/auth/register';
import Login from './screens/auth/login';

import Main from './screens/mainScreens';
import SplashScreen from './splashScreen';

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName="Init" headerMode="none">
    <RootStack.Screen name="Init" component={SplashScreen} />
    <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="Login" component={Login} />

    <RootStack.Screen name="Main" component={Main} />
  </RootStack.Navigator>
);

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigation;
