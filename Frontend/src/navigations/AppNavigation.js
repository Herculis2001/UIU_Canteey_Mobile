// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StudentLoginScreen from "../screens/Student/StudentLoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import StudentRegScreen from "../screens/Student/StudentRegScreen";
import FacultyRegScreen from "../screens/Faculty/FacultyRegScreen";
import FacultyLoginScreen from "../screens/Faculty/FacultyLoginScreen";
import OwnerLogin from "../screens/Owner/OwnerLogin";

const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='StudentLoginScreen' component={StudentLoginScreen} />
      <Stack.Screen name='StudentRegScreen' component={StudentRegScreen} />
      <Screen name='FacultyLoginScreen' component={FacultyLoginScreen} />
      <Screen name='FacultyRegScreen' component={FacultyRegScreen} />
    </Stack.Navigator>
  )
} 
const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 

export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 

