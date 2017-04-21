import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { deviceButton as DeviceButton } from './deviceButton';
		


class Interface extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			redditor: ''
		}
	}
	_onPressButton() {
		fetch('https://www.reddit.com/.json')
		.then( res => res.json() )
		.then( data => {
			const reddit =  data.data.children[0].data.author
			this.setState({redditor: reddit})
		})
		.catch( (err) => {
			console.log(err)
		})
	}
	render() {
		return (
			<View>
				<Text style={{marginTop: 40}}>neuroflow</Text>
				<Text >Changing the way we see brain health</Text>
				<Text >Welcome {this.props.username}</Text>
				<Text >{this.state.redditor}</Text>
				<Text >Device Icon Device Icon</Text>
				<Text >Select which available device to stream (up to 3)</Text>
				<Text>Device</Text>
				<Text>Device</Text>
				<DeviceButton onPress={this._onPressButton.bind(this)} />
				{/* <DeviceButton /> */}
				<Text>Device</Text>
				<TextInput style={{height: 40, borderColor: 'black', borderWidth: 1, margin: 10, marginTop: 30}}
				  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
				/>
				<Text style={styles.output}>{this.state.text}</Text>
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

export default Interface

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
