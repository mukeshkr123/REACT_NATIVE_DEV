import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Text Component with onPress */}
      <View>
        <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>
          Hello React Native
        </Text>
      </View>

      {/* Local Image Component */}
      <Image
        source={require("./assets/icon.png")} // Replace with your image path
        style={styles.image}
      />

      {/* Touchable View */}
      <TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
        <View style={styles.touchableView}>
          <Text>Touchable View</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Button Component with Alert Prompt */}
      <Button
        title="Learn More"
        onPress={() =>
          Alert.prompt("My title", "My message...", (text) => console.log(text))
        }
      />

      {/* StatusBar Component */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  touchableView: {
    backgroundColor: "lightcoral",
    padding: 10,
  },
});
