import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
  Platform
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";


export default function App({ navigation }) {

  const [isModalVisible, setIsModalVisible] = useState(true);

  //   checkDeviceForHardware = async () => {

  //   let compatible = await Expo.Fingerprint.hasHardwareAsync();

  //   this.setState({ compatible });

  //   if (!compatible) {

  //     Alert.alert(
  //       "Erro! Current device does not have the necessary hardware to use this API."
  //     );
  //   }
  // };

  async function authenticate() {

    const hasPassword = await LocalAuthentication.isEnrolledAsync();


    if (!hasPassword) return;

    const { success, error } = await LocalAuthentication.authenticateAsync();


    if (success) {
      navigation.navigate('Two');


    } else {
      Alert.alert("Authentication failed. Please, insert your password!");
    }

    setIsModalVisible(false);

  }


  Platform.OS === "ios" && authenticate();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./assets/Logo.png")}
        style={styles.logo}
      />
      <Text style={styles.loginText}
        >Wellcome to YourBank
      </Text>
      <Text style={styles.loginText}
        >Press the button to log in
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#444"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#444"
      />
      <TouchableOpacity style={styles.button}
        onPress={() => {
        authenticate();
        }}
      >
        <Text>Log in</Text>
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
  input: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: "#7159c1",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10
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
  logo: {
    width: 120,
    height: 120,
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
