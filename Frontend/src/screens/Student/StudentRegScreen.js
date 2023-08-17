import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
  const navigation = useNavigation();
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
      const res = await fetch('./student_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          studentid,
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
        return alert('user already exist');
      }
      if (dataa === '425') {
        return alert('password is not matching');
      }
      if (dataa === '200') {
        return alert('Successfully Registered');
      }
    } catch (err) {
      console.log('there is an error', err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => handleInputs('email', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Student ID"
            keyboardType="numeric"
            onChangeText={(text) => handleInputs('studentid', text)}
          />
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={(text) => handleInputs('password', text)}
            />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShowPassword((show) => !show)}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </TouchableOpacity>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Confirm Password"
              secureTextEntry={!showPassword}
              onChangeText={(text) => handleInputs('cpassword', text)}
            />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShowPassword((show) => !show)}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => Linking.openURL('/studentlogin')}
            style={styles.link}
          >
            <View style={styles.center}>
              <Text style={styles.linkText}>Login</Text>
            </View>
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
    color: '#33272a',
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
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputPassword: {
    flex: 1,
  },
  iconButton: {
    paddingHorizontal: 10,
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
    marginBottom: 10,
  },
  link: {
    alignSelf: 'center',
  },
  linkText: {
    color: '#272343',
  },
  center: {
    alignItems: 'center',
  },
});
