import React from 'react';
import {
	Text,
	View,
	Button
} from 'react-native';
import Interface from './containers/interface'
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
				<Interface username={params.user} />
			</View>
			);
	}
}

export default HomePage