import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ViewIcon, ViewOffIcon } from 'react-native-heroicons/solid';

export default function SignupCard() {
  const navigation = useNavigation();
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
      const res = await fetch('./faculty_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          room_no,
          phone_no,
          password,
          cpassword,
        }),
      });
      const dataa = await res.json();
      console.log(dataa);
      if (dataa === '422') {
        return alert('Fill the form');
      }
      if (dataa === '423') {
        return alert('User already exists');
      }
      if (dataa === '425') {
        return alert('Password is not matching');
      }
      if (dataa === '200') {
        return alert('Successfully Registered');
      }
    } catch (err) {
      console.log('There is an error', err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => handleInputs('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => handleInputs('email', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Room No."
            onChangeText={(text) => handleInputs('room_no', text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone No."
            onChangeText={(text) => handleInputs('phone_no', text)}
            keyboardType="numeric"
          />
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={(text) => handleInputs('password', text)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.passwordToggle}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </TouchableOpacity>
          </View>
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!showPassword}
              onChangeText={(text) => handleInputs('cpassword', text)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.passwordToggle}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('/facultylogin')}>
            <Text style={styles.linkText}>Already a user? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffffe',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fffffe',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    width: 393,
  },
  heading: {
    fontSize: 24,
    color: '#272343',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  passwordToggle: {
    padding: 5,
  },
  button: {
    backgroundColor: '#ffd803',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#272343',
  },
  linkText: {
    color: '#272343',
    textAlign: 'center',
  },
});
