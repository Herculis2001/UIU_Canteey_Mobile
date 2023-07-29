import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StudentLoginScreen(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      // Implement your fetch logic here using the appropriate APIs for React Native
      // Example: const res = await fetch('your_api_url', { method: 'POST', ... });
      // Rest of the code remains the same
      console.log("Logging in with:", { email, password });

      // Simulate a successful login
      // Remove the following line in your real implementation
      alert("Successfully Logged In");

      // Navigate to the studentmenu screen after successful login
      navigation.navigate("StudentMenu");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 0.5 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faeee7",
          padding: 16,
          
        }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 32, color: "#33272a", marginVertical: 20}}>
            Sign in to your account
          </Text>
        </View>
        <View
          style={{
            borderRadius: 18,
            backgroundColor: "#fff",
            shadowColor: "rgba(0,0,0,0.24)",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 10,
            shadowRadius: 6,
            elevation: 6,
            padding: 100,
          }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 32, color: "#33272a", margin: "auto"}}>Student</Text>
          </View>
          <View style={{ marginVertical: 25}}>
            <TextInput
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
            />
          </View>

          <View style={{ marginVertical: 25}}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <View style={{ marginVertical: 16 }}>
            <TouchableOpacity
              onPress={loginHandler}
              style={{
                backgroundColor: "#ff8ba7",
                padding: 10,
                alignItems: "center",
                borderRadius: 4,
              }}>
              <Text style={{ color: "#33272a", fontSize: 18 }}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomWidth: 1, borderColor: "#ccc" }} />

          <TouchableOpacity
            onPress={() => navigation.navigate("StudentRegister")}
            style={{
              padding: 16,
              alignItems: "center",
            }}>
            <Text
              style={{ color: "#33272a", fontSize: 18, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
