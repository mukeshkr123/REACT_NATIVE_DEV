import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const messages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("../assets/profile.png"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("../assets/profile.png"),
  },
];

// Create a ListItem component
const ListItem = ({ title, subTitle, image }) => (
  <View style={styles.listItem}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  </View>
);

export default function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#666",
  },
});
