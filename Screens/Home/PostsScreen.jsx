import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; 

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>Natali Romanova</Text>
      <Feather name="log-out" size={24} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  user: {
    fontSize: 15,
  },
});
