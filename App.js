import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ScreenB from './components/ScreenB';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FormFile from './components/form';

import { Provider } from 'react-redux';
import { Store } from './components/redux/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='Form' component={FormFile}/>
          <Drawer.Screen name='Info' component={ScreenB}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App;

