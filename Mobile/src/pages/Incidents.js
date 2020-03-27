import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Logo from "../assets/logo.png";

export default () => {
  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>Exemplo de Descrição</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
