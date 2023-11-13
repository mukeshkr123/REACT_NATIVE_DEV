import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: {
            width: -10,
            height: 10,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 40,
            height: 40,
          }}
        ></View>
      </View>
    </View>
  );
}
