import React from 'react';
import {
	Text,
	View,
	Button,
	TextInput,
	StyleSheet,
	Dimensions
} from 'react-native';

import { StackNavigator } from 'react-navigation';

let {width} = Dimensions.get('window');

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}
	componentDidMount() {
		
	}
	render() {
		const { navigate } = this.props.navigation;
		const name = 'Dude';
		return (
			<View style={styles.containerView} >
				<TextInput 
				  style={[styles.input, {marginTop: 50}]}
				  placeholder="username"
				  onChangeText={(username) => this.setState({username})} 
                  value={this.state.username}
				/>
				<TextInput 
				  style={styles.input}
				  placeholder="password"
				  secureTextEntry={true}
				  onChangeText={(password) => this.setState({password})} 
                  value={this.state.password}
				/>
				<Button 
					onPress={ () => navigate('Home', {user: this.state.username} ) }
					title="submit"
				/>
			</View>
			)
	}
}
const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	input: {
		height: 40, 
		width: width * .8, 
		borderColor: 'black', 
		borderWidth: 1,
		margin: 5,
		marginLeft: width * .1,
		padding: 5
	}
});

export default Login


	// render() {
	// 	return (
	// 		<View>
	// 			<Text style={{marginTop: 40}}>neuroflow</Text>
	// 			<Text >Changing the way we see brain health</Text>
	// 			<Text >Welcome {this.props.username}</Text>
	// 			<Text >{this.state.redditor}</Text>
	// 			<Text >Device Icon Device Icon</Text>
	// 			<Text >Select which available device to stream (up to 3)</Text>
	// 			<Text>Device</Text>
	// 			<Text>Device</Text>
	// 			<DeviceButton onPress={this._onPressButton.bind(this)} />
	// 			{/* <DeviceButton /> */}
	// 			<Text>Device</Text>
	// 			<TextInput style={{height: 40, borderColor: 'black', borderWidth: 1, margin: 10, marginTop: 30}}
	// 			  onChangeText={(text) => this.setState({text})}
 //                  value={this.state.text}
	// 			/>
	// 			<Text style={styles.output}>{this.state.text}</Text>
	// 		</View>
	// 	);
	// }


					  /*
				  onChangeText={(text) => this.setState({text})} 
                  value={this.state.text}
                  */