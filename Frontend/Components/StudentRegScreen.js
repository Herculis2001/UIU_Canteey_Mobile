import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

export default function StudentRegScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [student, setStudent] = useState({
    email: '',
    studentid: '',
    password: '',
    cpassword: '',
  });

  const handleInputs = (name, value) => {
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = async () => {
    const { email, studentid, password, cpassword } = student;
    try {
      // Implement your fetch logic here using the appropriate APIs for React Native
      // Example: const res = await fetch('your_api_url', { method: 'POST', ... });
      // Rest of the code remains the same
      console.log('Form data:', student);
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
          <Text style={{ fontSize: 32, color: '#33272a' ,marginVertical: 20}}>Sign Up</Text>
        </View>
        <View
          style={{
            borderRadius: 18,
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
            <Text style={{ fontSize: 32, color: '#33272a' }}>Student</Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Email"
              onChangeText={(value) => handleInputs('email', value)}
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Student ID"
              onChangeText={(value) => handleInputs('studentid', value)}
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={(value) => handleInputs('password', value)}
            />
            <TouchableOpacity
              style={{ position: 'absolute', top: 12, right: 8 }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Text>Hide</Text> : <Text>Show</Text>}
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 8 }}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={!showPassword}
              onChangeText={(value) => handleInputs('cpassword', value)}
            />
            <TouchableOpacity
              style={{ position: 'absolute', top: 12, right: 8 }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Text>Hide</Text> : <Text>Show</Text>}
            </TouchableOpacity>
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

          <View>
            <Text style={{ textAlign: 'center' }}>
              Already a user?{' '}
              <Text style={{ color: '#33272a', fontWeight: 'bold' }}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

