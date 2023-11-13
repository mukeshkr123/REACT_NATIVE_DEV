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
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I Love React Native! I love React Native! I love React Native! I love
        React Native! Here some more text
      </Text>
    </View>
  );
}
