import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SimpleCard(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginhandler = async () => {
    try {
      const response = await axios.post('./faculty_login', {
        email,
        password,
      });

      const dataa = response.data;
      if (dataa === '405') {
        return alert('Invalid Credentials');
      }
      if (dataa === '404') {
        return alert('Enter all fields');
      }
      if (dataa === '406') {
        return alert('User is not registered');
      }
      if (dataa) {
        alert('Successfully Logged In');
        navigation.navigate('/faculty/facultymenu');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Sign in</Text>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={loginhandler}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => navigation.navigate('/facultyregister')}
            style={styles.signUpButton}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  formLabel: {
    fontSize: 18,
    color: '#272343',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
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
  divider: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: '#e3f6f5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});
