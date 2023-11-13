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

## Layout in React Native

### Dimensions

In React Native, you can work with dimensions to create responsive layouts. The key concept to understand is Density-independent Pixels (DIPS) and how they relate to physical pixels based on the device's scale factor.

```jsx
import { Dimensions } from "react-native";

// Get the dimensions of the screen
console.log(Dimensions.get("screen"));
```

### Detecting Orientation Changes

To handle orientation changes and other device-specific events in your React Native app, you can use the `@react-native-community/hooks` library.

1. Install it using npm:

```bash
npm install @react-native-community/hooks
```

### Flexbox

Flexbox is a powerful layout system in React Native that allows you to create flexible and responsive designs. Here's a basic example:

```jsx
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "dodgerblue", flex: 2 }} />
      <View style={{ backgroundColor: "gold", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
    </View>
  );
}
```

### Flexbox Direction

In flexbox, you can control the direction of elements within a container. The primary axis is the horizontal axis, and the cross axis is the vertical axis. By default, the flex direction is set to `column`. Here's an example of changing the flex direction to `row`:

```jsx
<View
  style={{
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
  }}
/>
```

### Flexbox JustifyContent, AlignItems, and AlignSelf

Flexbox also provides properties like `justifyContent`, `alignItems`, and `alignSelf` to fine-tune the alignment and positioning of elements within a flex container:

```jsx
<View
  style={{
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row", // horizontal
    justifyContent: "center", // main axis
    alignItems: "center", // cross axis
  }}
/>
```

### Flexbox FlexWrap and AlignContent

You can control how elements wrap within a flex container using `flexWrap` and `alignContent` properties. Here's an example:

```jsx
<View
  style={{
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row", // horizontal
    justifyContent: "center", // main axis
    alignItems: "center", // cross axis
    flexWrap: "wrap",
    alignContent: "center",
  }}
/>
```

### Absolute and Relative Positioning

In React Native, you can control the positioning of elements within their parent containers using two main techniques: absolute positioning and relative positioning.

#### Absolute Positioning

Absolute positioning allows you to place an element precisely within its parent container. You specify the exact coordinates of the element, relative to the container's edges. This technique is often used when you need to overlay elements or create complex custom layouts.

Here's an example of absolute positioning:

```jsx
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
        }}
      />
    </View>
  );
}
```

## Styling

### Borders

To add borders to components in React Native, use the `style` prop with properties like `borderWidth`, `borderColor`, and `borderStyle`. Here's a quick guide:

### 1. Using Style Prop:

```jsx
<View
  style={{
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  }}
>
  {/* Your component's content */}
</View>
```

### 2. Shorthand Border Property:

```jsx
<View
  style={{
    border: "1px solid black",
  }}
>
  {/* Your component's content */}
</View>
```

### 3. Individual Border Sides:

```jsx
<View
  style={{
    borderTopWidth: 1,
    borderTopColor: "black",
    borderBottomWidth: 2,
    borderBottomColor: "red",
    borderLeftWidth: 1,
    borderLeftColor: "green",
    borderRightWidth: 3,
    borderRightColor: "blue",
  }}
>
  {/* Your component's content */}
</View>
```

### Adding Shadows e

Elevate your components by adding shadows for a polished look and improved user interface. Use the `style` prop to apply shadows with properties such as `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius` (iOS), and `elevation` (Android).

```jsx
<View
  style={{
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Android only
  }}
>
  {/* Your component's content */}
</View>
```

### Paddings and Margins

- **Definition:** Padding refers to the space between a component's content and its border. It provides internal spacing, ensuring that the content has breathing room within the component.

- **Usage:**

  ```jsx
  <View style={{ padding: 16 }}>{/* Your component's content */}</View>
  ```

  ```jsx
  <View style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
    {/* Your component's content */}
  </View>
  ```

- **Definition:** Margins, on the other hand, dictate the space outside a component's border. They determine the distance between the component and its neighboring elements.

- **Usage:**
  ```jsx
  <View style={{ margin: 16 }}>{/* Your component's content */}</View>
  ```
  ```jsx
  <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
    {/* Your component's content */}
  </View>
  ```

### Styling Text

```jsx
<Text
  style={{
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  This is styled text.
</Text>
```

- Adjust `fontSize`, `color`, `fontWeight`, and `textAlign` for basic styling.
- Specify `fontFamily` for custom font usage.
- Add text decoration with `textDecorationLine`.
- Set line height using `lineHeight`.
- Apply text shadow using `textShadowColor`, `textShadowOffset`, and `textShadowRadius`.

### Encapsulating Styles

- In React Native, encapsulating styles for text involves creating reusable and organized style definitions for text components. This practice enhances maintainability and allows for consistent styling across your application. Encapsulating styles can be achieved using various methods, such as using inline styles, creating separate style objects, or leveraging external stylesheets.

**For Text**

1. Create a separate `AppText` component

```jsx
import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
```

2. use this in any component

```jsx
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
```

### Icons

-Import icons from @expo/vector-icons and use them in your components. Here's an example using the Ionicons set:

```jsx
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
```

### Platform-specific Code

## Import the Platform Module

```jsx
import { Platform } from "react-native";
```

## Write Platform-Specific Code

Use `Platform.OS` to conditionally execute code based on the current platform.

```jsx
if (Platform.OS === "ios") {
  // Code specific to iOS
} else if (Platform.OS === "android") {
  // Code specific to Android
}
```

For instance, you can customize styles or behavior:

```jsx
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "lightgray",
      },
      android: {
        backgroundColor: "lightblue",
      },
    }),
  },
});
```

## Platform-Specific Extensions

You can create files with platform-specific extensions, such as `MyComponent.ios.js` or `MyComponent.android.js`. The appropriate file is automatically chosen based on the platform.

```jsx
// MyComponent.js

import { Platform, Text } from "react-native";

const MyComponent = () => {
  return (
    <Text>
      This is common code.
      {Platform.OS === "ios" && <Text> This is specific to iOS.</Text>}
      {Platform.OS === "android" && <Text> This is specific to Android.</Text>}
    </Text>
  );
};

export default MyComponent;
```

# Organizing Styles in React Native

## 1. Inline Styles

```jsx
<View style={{ backgroundColor: "lightblue", padding: 10 }}>
  <Text style={{ fontSize: 16, color: "black" }}>Inline Styles</Text>
</View>
```

While suitable for small components, avoid inline styles for larger projects to maintain readability.

## 2. StyleSheet Object

Create a `StyleSheet` object to define styles in a separate file, promoting better organization and code reuse.

```jsx
// styles.js
import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
  },
});

export default commonStyles;
```

```jsx
// YourComponent.js
import React from "react";
import { View, Text } from "react-native";
import commonStyles from "./styles";

const YourComponent = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Styled Text</Text>
    </View>
  );
};

export default YourComponent;
```

## 3. Separate Files for Each Component

Organize styles by creating separate style files for each component, making it easy to locate and manage styles for specific components.

```jsx
// YourComponentStyles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
  },
});

export default styles;
```

```jsx
// YourComponent.js
import React from "react";
import { View, Text } from "react-native";
import styles from "./YourComponentStyles";

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled Text</Text>
    </View>
  );
};

export default YourComponent;
```

## 4. Theme and Variants

Create a theme object to store common styles and variants for different scenarios, such as light and dark themes.

```jsx
// theme.js
export const lightTheme = {
  backgroundColor: "white",
  textColor: "black",
};

export const darkTheme = {
  backgroundColor: "black",
  textColor: "white",
};
```

Apply styles based on the theme or variant.

```jsx
// YourComponent.js
import React from "react";
import { View, Text } from "react-native";
import { lightTheme } from "./theme";

const YourComponent = () => {
  return (
    <View style={{ ...lightTheme, padding: 10 }}>
      <Text style={{ fontSize: 16, color: lightTheme.textColor }}>
        Styled Text
      </Text>
    </View>
  );
};

export default YourComponent;
```

## List

-In React Native, the FlatList component is a core component used for efficiently rendering a scrolling list of data. It is particularly useful when dealing with a large set of data that needs to be displayed in a list format. The FlatList component is designed to be memory-efficient and performant, as it only renders the items that are currently in the user's view.

```jsx
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
```
