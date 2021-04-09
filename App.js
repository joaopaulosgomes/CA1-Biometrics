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

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(true);

  async function authenticate() {

    
 
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
  }
});
