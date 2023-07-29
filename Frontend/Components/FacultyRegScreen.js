import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function FacultyRegScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [faculty, setFaculty] = useState({
    name: '',
    email: '',
    room_no: '',
    phone_no: '',
    password: '',
    cpassword: '',
  });

  const handleInputs = (name, value) => {
    setFaculty((prevFaculty) => ({ ...prevFaculty, [name]: value }));
  };

  const handleSubmit = async () => {
    const { name, email, room_no, phone_no, password, cpassword } = faculty;
    try {
      // Implement your fetch logic here using the appropriate APIs for React Native
      // Example: const res = await fetch('your_api_url', { method: 'POST', ... });
      // Rest of the code remains the same
      console.log('Form data:', faculty);

      // Simulate a successful registration
      // Remove the following line in your real implementation
      alert('Successfully Registered');
    } catch (err) {
      console.log('There is an error', err);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 0.5 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faeee7',
          padding: 16,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 32, color: '#33272a',marginVertical: 20 }}>Sign Up</Text>
        </View>
        <View
          style={{
            borderRadius: 8,
            backgroundColor: '#fff',
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 1,
            shadowRadius: 6,
            elevation: 6,
            padding: 16,
            width: 393,
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 32, color: '#33272a' }}>Faculty</Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Name"
              onChangeText={(value) => handleInputs('name', value)}
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Email"
              onChangeText={(value) => handleInputs('email', value)}
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Room No."
              onChangeText={(value) => handleInputs('room_no', value)}
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Phone No."
              onChangeText={(value) => handleInputs('phone_no', value)}
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={(value) => handleInputs('password', value)}
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={!showPassword}
              onChangeText={(value) => handleInputs('cpassword', value)}
            />
          </View>

          <View style={{ marginVertical: 16 }}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: '#ff8ba7',
                padding: 16,
                alignItems: 'center',
                borderRadius: 4,
              }}
            >
              <Text style={{ color: 'white', fontSize: 18 }}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomWidth: 1, borderColor: '#ccc' }} />

          <TouchableOpacity
            onPress={() => {}}
            style={{
              padding: 16,
              alignItems: 'center',
            }}
          >
            <Text
              style={{ color: '#33272a', fontSize: 18, fontWeight: 'bold' }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
