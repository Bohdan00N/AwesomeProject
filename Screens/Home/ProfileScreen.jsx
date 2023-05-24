import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import backgroundImage from "../../assets/images/backgroundImage.png";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View>
          <Text style={styles.title}>Profile</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
});
