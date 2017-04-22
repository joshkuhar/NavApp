import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { deviceButton as DeviceButton } from './deviceButton';
		


class Device extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: ''
		}
	}
	_onPressButton() {
		this.setState({selected: 'I was selected'});
	}
	render() {
		return (
			<View>
				<DeviceButton onPress={this._onPressButton.bind(this)} />
				<Text>This is the device {this.state.selected} </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	output: {
		color: 'blue',
		fontSize: 30,
	}
});

export default Device

// var ws = new WebSocket('ws://host.com/path');

// ws.onopen = () => {
//   // connection opened

//   ws.send('something'); // send a message
// };

// ws.onmessage = (e) => {
//   // a message was received
//   console.log(e.data);
// };

// ws.onerror = (e) => {
//   // an error occurred
//   console.log(e.message);
// };

// ws.onclose = (e) => {
//   // connection closed
//   console.log(e.code, e.reason);
// };
