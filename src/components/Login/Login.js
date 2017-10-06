import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {

		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.title}>Welcome to Beer Party</Text>	
					<Image
						style={styles.logo}
						source={require('../../images/logo.png')}	
					/>	
				</View>
				<View style={styles.formContainer}>
					<LoginForm />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: '#3498db',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		color: '#fff',
		marginBottom: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		opacity: 0.9,
		fontSize: 30
	}
})
