# The Ultimate React Native Development Guide

## Introduction

This guide covers the essential concepts and steps to build a React Native app using Expo. There are two primary ways to build React Native applications: Expo CLI and React Native CLI.

### Two Ways to Build React Native

1. Expo CLI
2. React Native CLI

## Setting up the Development Environment

Before you start building your React Native app, make sure to set up your development environment. Follow these steps:

1. **Install Node.js**: Make sure you have Node.js installed on your system.

### Using Expo CLI

To get started with Expo, follow these steps:

1. **Install Expo CLI**: Install the Expo CLI globally with the following command:

   ```
   npm install -g expo-cli
   ```

2. **Create a New React Native Project**: Initialize a new React Native project using Expo CLI.

   ```
   npx expo init myProject
   ```

3. **Navigate to Your Project Directory**: Change your current directory to the newly created project.

   ```
   cd myProject
   ```

4. **Start the Development Server**: Launch the development server with Expo CLI.
   ```
   npx expo start
   ```

## Fundamental Concepts

### View

The `View` component is fundamental for building a UI. It serves as a container that supports layout with flexbox, styling, touch handling, and accessibility controls.

```jsx
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

- `<SafeAreaView>`: Use this to render content within the safe area boundaries of a device.

### Text

The `Text` component is used for displaying text with essential props like `numberOfLines` and `onPress`.

```jsx
<Text numberOfLines={1} onPress={() => console.log("text clicked")}>
  Hello React Native
</Text>
```

### Image

Use the `Image` component for displaying both local and network images.

For local images:

```jsx
<Image source={require("./assets/icon.png")} />
```

For network images, provide `width` and `height`:

```jsx
<Image
  source={{
    width: 200,
    height: 300,
    uri: "https://picsum.photos/200/300",
  }}
/>
```

### Touchables

Wrap components in a touchable component like `TouchableWithoutFeedback` for touch interactions.

```jsx
<TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
  <MyComponent />
</TouchableWithoutFeedback>
```

### Button

The `Button` component is a basic button that renders nicely on any platform.

```jsx
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```

### Alert

Use the `Alert` component to launch an alert dialog with a specified title and message.

For a simple alert:

```jsx
<Button title="Learn more..." onPress={() => alert("pressed")} />
```

For a customized alert dialog:

```jsx
<Button
  title="Learn more..."
  onPress={() =>
    Alert.alert("My title", "My message", [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "default",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ])
  }
/>
```

For a prompt (iOS only):

```jsx
<Button
  title="Learn more..."
  onPress={() =>
    Alert.prompt("My title", "My message...", (text) => console.log(text))
  }
/>
```

### StyleSheet

Define styles using `StyleSheet.create` for consistency and performance.

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
```

### Platform specific code

-React Native provides a module that detects the platform in which the app is running.

```tsx
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 200 : 100,
});
```

## Layout

### Dimensions

-Density-independent Pixels  
--> Physical pixels = `DIPS x Scale Factor`

```jsx
import { Dimensions } from "react-native";
console.log(Dimensions.get("screen"));
```

### Detecting Orientation Changes

- React-native-community - hooks

1. Install `npm install @react-native-community/hooks`

### Flexbox

```jsx
export default function App() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}
```

### Flexbox- Direction

- Primary Axis - `it is the horizontal axis`
- Cross Axis - `it is the vertical axis`

**FlexDirection** in react native pre default flex direct in `column`

```ts
<View
  style={{
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
  }}
/>
```

### Flexbox- justifyContent, alignItems and alignSelf

```ts
<View
  style={{
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row", //horizontal
    justifyContent: "center", // main
    alignItems: "center", // secondary
  }}
/>
```
