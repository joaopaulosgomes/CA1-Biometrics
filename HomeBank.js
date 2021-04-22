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
        Health
          <Image
            source={require("./assets/health1.png")}
            
          />
          
        </Text>

        <Text style={styles.threeBoxes}>
        Beauty
          <Image
            source={require("./assets/beauty1.png")}
            
          />
          
        </Text>

        <Text style={styles.threeBoxes}>
        Travel
          <Image
            source={require("./assets/travel1.png")}
          
          />
          
        </Text>
        
        <Text style={styles.threeBoxes}>
        Clothes
          <Image
            source={require("./assets/clothes1.png")}
          
          />
          
        </Text>
      </View>
    </View>
  );
}

//StyleSheet - to create style objects with an ID to reuse it
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", //big background color
    marginHorizontal: 16, //side margin horizontal
  },
  boxIncome: {
    backgroundColor: "#ffffff", //box background
    width: 150, //how much will occupy the horizontal screen 
    alignItems: "center", //alignment of items 
    justifyContent: "space-around", //how to align children
    borderRadius: 6, //rounded edges 
    padding: 10, //set space around text component's content inside a border
    marginLeft: 5, //left margin
    textAlign: "center", //aligment text
  },
  boxExpenses: {
    backgroundColor: "#ffffff",
    width: 150, 
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 6,
    padding: 10,
    marginLeft: 10,
    textAlign: "center",
  },
  boxButton: {
    backgroundColor: "#e6e6fa", 
    width: 335, 
    borderRadius: 10, 
    flexDirection: "row",  //set boxes in rows, not columns 
    padding: 3,
    marginRight: 2,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  lastBox: {
    backgroundColor: "#e6e6fa", 
    width: 330, 
    borderRadius: 20, 
    flexDirection: "row", 
    padding: 13,
    alignItems: 'center',
  },
  threeBoxes: { //purple box
    backgroundColor: "#ffffff",
    width: 70, 
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    padding: 10,
    marginLeft: 5,
    textAlign: "center",
    paddingTop: 30,
    paddingVertical: 50,
    borderColor: "#fff",
    fontWeight: "bold",
  },
  containerPicture: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: 350,
    resizeMode: "contain",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    marginVertical: 5,
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