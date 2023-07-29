import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function SimpleCard(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    try {
      // Implement your fetch logic here using the appropriate APIs for React Native
      // Example: const res = await fetch('your_api_url', { method: 'POST', ... });
      // Rest of the code remains the same
      console.log('Logging in with:', { email, password });

      // Simulate a successful login
      // Remove the following line in your real implementation
      alert('Successfully Logged In');

      // Navigate to the facultymenu screen after successful login
      // Implement your navigation logic here
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#faeee7', padding: 16 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 32, color: '#33272a', marginVertical: 20 }}>Sign in to your account</Text>
        </View>
        <View style={{ borderRadius: 18, backgroundColor: '#fff', shadowColor: 'rgba(0,0,0,0.24)', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, shadowRadius: 6, padding: 100 }}>
          <View>
            <Text style={{ fontSize: 32, color: '#33272a', marginVertical: 20}}>Faculty</Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <TextInput placeholder="Email" onChangeText={(value) => setEmail(value)} />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput placeholder="Password" secureTextEntry onChangeText={(value) => setPassword(value)} />
          </View>

          <View style={{ marginVertical: 16 }}>
            <TouchableOpacity onPress={loginHandler} style={{ backgroundColor: '#ff8ba7', padding: 16, alignItems: 'center', borderRadius: 4 }}>
              <Text style={{ color: '#33272a', fontSize: 18 }}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomWidth: 1, borderColor: '#ccc' }} />

          {/* Implement your navigation logic here */}
          <TouchableOpacity onPress={() => {}} style={{ padding: 16, alignItems: 'center' }}>
            <Text style={{ color: '#33272a', fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
