import React from 'react';
import {
	Text,
	View,
	Button
} from 'react-native';
import Device from './containers/device'
import { StackNavigator } from 'react-navigation';

class HomePage extends React.Component {
	static navigationOptions = {
		title: 'NeuroFlow'
	}
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Welcome, {params.user} </Text>
				<Device />
			</View>
			);
	}
}

export default HomePage