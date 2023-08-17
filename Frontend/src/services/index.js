import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      await axios.post('http://localhost:8000/register', { email, password });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const loginUser = async () => {
    try {
      await axios.post('http://localhost:8000/login', { email, password });
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={registerUser} />
      <Button title="Login" onPress={loginUser} />
    </View>
  );
};

export default App;
