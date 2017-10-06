import React, { Component } from 'react';
import { Text,
				StyleSheet,
				View,
				TextInput,
				TouchableOpacity,
				StatusBar,
				} from 'react-native';

export default class LoginForm extends Component {
	render() {
		return(
			<View behavior="padding" style={styles.container}>
				<StatusBar
					barStyle="light-content"
				/>
				<TextInput
				placeholder="username or email"
				placeholderTextColor= "rgba(255,255,255,0.5)"
				returnKeyType="next"
				keyboardType="email-address"
				autoCapitalize='none'
				autoCorrect={false}
				onSubmitEditing={() => this.passwordInput.focus()}
				style={styles.input} 
				/>
				<TextInput
				placeholder="password"
				placeholderTextColor= "rgba(255,255,255,0.5)"
				returnKeyType="go"
				secureTextEntry
				style={styles.input}
				ref={(input) => this.passwordInput = input}
				/>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 10,
		color: '#fff',
		paddingHorizontal: 10,
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
	}
});