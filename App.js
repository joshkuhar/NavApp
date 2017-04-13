import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  render() {
  	const { navigate } = this.props.navigation;
    return (
		<View>
		  <Text>Hello, chat</Text>
		  <Button 
		  	onPress={() => navigate('Chat', { user: 'Lucy'})}
		  	title="Chat with Lucy"
		  />
		</View>
    )
  }			
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: ( {state} ) => `Chat with ${state.params.user}`,
  };
  render() {
	const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user} </Text>
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    return (
    	<View>
    	  <Text>List of recent chats</Text>
    	  <Button
    	    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy'})}
    	    title="Chat with Lucy"
    	  />
    	  <Button
    	    onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane'})}
    	    title="Chat with Jane"
    	  />
    	</View>
    	)
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
    	<View>
    	  <Text>List of recent chats</Text>
    	  <Button
    	    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy'})}
    	    title="Chat with Lucy"
    	  />
    	  <Button
    	    onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane'})}
    	    title="Chat with Jane"
    	  />
    	</View>
    	)
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
MainScreenNavigator.navigationOptions = {
	title: "My Chats",
};

const NavApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen }
})

AppRegistry.registerComponent('NavApp', () => NavApp);