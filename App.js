import React from 'react';
import {
	AppRegistry,
	Text,
	View,
	Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/login';
import HomePage from './src/homePage';


// Navigaton header
const HelloApp = StackNavigator({
	Login: { screen: Login },
	Home: { screen: HomePage, navigationOptions: { headerTintColor: 'green' } },
}, {
	headerMode: 'screen',
});

AppRegistry.registerComponent('NavApp', () => HelloApp);