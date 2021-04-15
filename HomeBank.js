import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function HomeBank() {
  return (
    <View style={styles.container}>
      <Text style={styles.overview}>Overview</Text>

      <Text style={styles.balance}>Total balance</Text>

      <Text style={styles.cash}>€13.450</Text>

      <View style={styles.boxButton}>
        <Text style={styles.boxIncome}>Incomes</Text>

        <Text style={styles.boxExpenses}>Expenses</Text>
      </View>

      <Image source={require("./assets/bar.png")} style={styles.containerPicture} />

      <View style={styles.lastBox}>
        <Text style={styles.threeBoxes}>
          <Image
            source={require("./assets/health.png")}
            style={styles.containerPicture}
          />
          Health
        </Text>

        <Text style={styles.threeBoxes}>
          <Image
            source={require("./assets/beauty.png")}
            style={styles.containerPicture}
          />
          Beauty
        </Text>

        <Text style={styles.threeBoxes}>
          <Image
            source={require("./assets/travel.png")}
            style={styles.containerPicture}
          />
          Travel
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
  },
  boxIncome: {
    backgroundColor: "#ffffff",
    width: "47%", 
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 6,
    padding: 10,
    marginLeft: 5,
    textAlign: "center",
  },
  boxExpenses: {
    backgroundColor: "#ffffff",
    width: "47%", 
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 6,
    padding: 10,
    marginLeft: 10,
    textAlign: "center",
  },
  boxButton: {
    backgroundColor: "#e6e6fa", 
    width: "98%", 
    borderRadius: 10, 
    flexDirection: "row", 
    padding: 3,
  },
  lastBox: {
    backgroundColor: "#e6e6fa", 
    width: "100%", 
    borderRadius: 20, 
    flexDirection: "row", 
    padding: 13,
  },
  threeBoxes: {
    backgroundColor: "#ffffff",
    width: "31%", 
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    padding: 10,
    marginLeft: 5,
    textAlign: "center",
    paddingTop: 70,
    paddingVertical: 50,
    borderColor: "#fff",
    fontWeight: "bold",
  },
  containerPicture: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  balance: {
    textAlign: "center",
  },
  cash: {
    textAlign: "center",
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 33,
    paddingBottom: 20,
  },
  overview: {
    paddingTop: 50,
    paddingVertical: 50,
    borderColor: "#fff",
    fontWeight: "bold",
  },
});