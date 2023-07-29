// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StudentLoginScreen from "./Components/StudentLoginScreen";
import HomeScreen from "./Components/HomeScreen";
import StudentRegScreen from "./Components/StudentRegScreen";
import FacultyRegScreen from "./Components/FacultyRegScreen";
import FacultyLoginScreen from "./Components/FacultyLoginScreen";
import OwnerLogin from "./Components/OwnerLogin";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Owner Login" component={OwnerLogin}/>
        <Stack.Screen name="Faculty Login" component={FacultyLoginScreen} />
        <Stack.Screen name="Faculty Reg" component={FacultyRegScreen}/>
      <Stack.Screen name="Student Login" component={StudentLoginScreen} />
      <Stack.Screen name="StudentReg" component={StudentRegScreen}/>
      
      <Stack.Screen name="Home" component={HomeScreen} />
      
      
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
