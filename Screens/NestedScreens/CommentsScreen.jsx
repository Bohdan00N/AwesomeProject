import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";


export default function CommentsScreen() {
  return (
    <View style={styles.container}>
        <Text>Комментарии</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, 
});