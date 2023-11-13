import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "./app/components/Button";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
    </View>
  );
}

const styles = StyleSheet.create({});
