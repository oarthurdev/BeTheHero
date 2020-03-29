import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default () => {
  return (
    <View style={styles.container}>
      <Text>Olá, mundo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  }
});
