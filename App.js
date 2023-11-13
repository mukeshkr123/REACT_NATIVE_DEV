import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  return (
    <View>
      <Text>Hello, this is an icon: </Text>
      <Ionicons name="rocket" size={30} color="#900" />
    </View>
  );
};

export default App;
