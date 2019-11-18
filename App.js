import React from 'react';
import { Container, Item, Form, Input, Button, Label } from 'native-base';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyAiCUTX6MgYY7b_eslXQ4Z8gO1c1ijlJuM',
	authDomain: 'evernote-clone-fbf92.firebaseapp.com',
	databaseURL: 'https://evernote-clone-fbf92.firebaseio.com',
	projectId: 'evernote-clone-fbf92',
	storageBucket: 'evernote-clone-fbf92.appspot.com',
	messagingSenderId: '189028839514',
	appId: '1:189028839514:web:03ccf8a67bd9c51ff02863'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
	return (
		<Container>
			<Form>
				<Item floatingLabel>
					<Label>Email</Label>
					<Input autoCapitalize="none" autoCorrect={false} />
				</Item>
				<Item floatingLabel>
					<Label>Password</Label>
					<Input secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />
				</Item>
				<Button full rounded>
					<Text>SignIn</Text>
				</Button>
			</Form>
		</Container>
	);
}
