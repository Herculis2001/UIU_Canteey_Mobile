// HomeScreen.js
import React, {useState} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity, Image, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [currentScreen, setCurrentScreen] = useState('Login');

  const handleHeaderPress = () => {
    setShowDropdown(!showDropdown);
  };

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
  };
  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        UIU{' '}
        <Text style={styles.spanText}>
          Canteey
        </Text>
      </Text>
      <Text style={styles.description}>
        A university canteen is a dining facility located on a university
        campus that provides meals and refreshments to students, faculty, and
        staff. The university canteen doesn’t only provide food but also
        wonderful memories. It serves as a convenient and accessible place for
        members of the university community to have meals, snacks, and
        beverages during the day.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            width: 200,
            height: 300,
            uri: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg',
          }}
        />
      </View>
      <View style={styles.container}>
      <Text style={styles.heading}>Want to Login</Text>
      <Button
        title="Click Here"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faeee7',
    padding: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 44,
    textAlign: 'center',
    marginBottom: 10,
  },
  spanText: {
    color: '#33272a',
  },
  description: {
    color: '#594a4e',
    textAlign: 'center',
    maxWidth: 350,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 16,
  },
});

export default HomeScreen;
