import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";


export default function App({ navigation }) {
  state = {
    compatible: false,
  };

  //This function tests if the device has hardware required for authentication
  checkDeviceForHardware = async () => {

    //hasHardwareAsync() chech the hardware in the device
    let compatible = await Expo.Fingerprint.hasHardwareAsync();

    //If this device is compatible, the variable "compatible" which starts false changes to true
    this.setState({ compatible }); 
    
    //in case of the device not compatible, set this alert on
    if (!compatible) {
      this.showIncompatibleAlert();
    }
  };

  //This function set a modal in the display
  showIncompatibleAlert = () => {
    Alert.alert(
      "Error!",
      "Current device does not have the necessary hardware to use this API."
    );
  };

  //This function autheticates the device
  async function authenticate() {
    
      //Checks if there is a password/PIN enrolled in the OS of the device installed
      let hasPassword = await LocalAuthentication.isEnrolledAsync();

      if (!hasPassword) {
      //in case of not having a password, return to the beginning
        Alert.alert(
          "No Biometrics Found!",
          "Please ensure you have set up biometrics in your OS settings"
        );
      }

    if (hasPassword){
      //authenticateAsync() checks if the authentication in the device has succeeded
      const { success } = await LocalAuthentication.authenticateAsync();

      // if authentication went through, redirect user to page Two (HomeBank)
      if (success) { 
        navigation.navigate('Two');
      
      //Otherwise, stay at the same page and try again
      } else { 
        Alert.alert(
          "Authentication failed",
          "Please, use your password for authentication!");
      }
    }
  }

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
        placeholder="E-mail"
        placeholderTextColor="#7159c1"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#7159c1"
      />
      <TouchableOpacity style={styles.button}
        //On press, the function "authenticate()" is handled
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
