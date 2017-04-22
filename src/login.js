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
			password: '',

		}
	}
	_onPressButton() {
		// navigate pushes to home screen
		const { navigate } = this.props.navigation;
		url = 'https://floating-shore-34169.herokuapp.com/login';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		})
		.then( res => res.json() )
		.then( data => {
			if(data){
			  // navigate pushes to home screen
			  navigate('Home', {user: this.state.username})
			}
		})
		.catch( (err) => {
			console.log(err)
		})		
	}
	render() {
		//const { navigate } = this.props.navigation;
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
				  onPress={this._onPressButton.bind(this)}
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


/*


onPress={ () => navigate('Home', {user: this.state.username} ) }



*/