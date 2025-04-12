import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#04152D",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});

export default FavoriteScreen;
