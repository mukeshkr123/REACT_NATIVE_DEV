import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontFamily: "Roboto",
    fontSize: 20,
  },
});
