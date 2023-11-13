import React from "react";
import { View } from "react-native";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>
        I Love React Native! I love React Native! I love React Native! I love
        React Native! Here some more text
      </AppText>
    </View>
  );
}
