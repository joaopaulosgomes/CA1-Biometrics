import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Platform
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

//funtions to be added: assync function, cancel modal or alert, all styles
//to be modified, all interface
//files to be added: TransactionScreen.js

export default function App({ navigation }) {

  const [isModalVisible, setIsModalVisible] = useState(true);

  async function authenticate() {

    const hasPassword = await LocalAuthentication.isEnrolledAsync();


    if (!hasPassword) return;

    const { success, error } = await LocalAuthentication.authenticateAsync();


    if (success) {
      //Alert.alert("Device authenticated");
      navigation.navigate('Two');


    } else {
      Alert.alert("Authentication failed. Please, insert your password!");
    }

    setIsModalVisible(false);

  }


  Platform.OS === "ios" && authenticate();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}
        >Wellcome to YourBank
      </Text>
      <Text style={styles.loginText}
        >Press the button to log in</Text>
      <TouchableOpacity style={styles.button}
      onPress={() => {
        authenticate();
    }}
      >
        <Text>Enter</Text>
      </TouchableOpacity>

      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#19181f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: "#7159c1",
    backgroundColor: "#7159c1",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  loginText: {
    color: "#7159c1",
    fontSize: 16,
    paddingBottom: 10,
  },
  modal: {
    backgroundColor: "#333",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "40%"
  },
  cancelText: {
    color: "red",
    fontSize: 16
  },
  authText: {
    color: "white",
    fontSize: 16
  }
});
