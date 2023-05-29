import React from "react";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Out = () => {
  const navigation = useNavigation();
  return (
    <Text dataDetectorType="link" 
    onPress={() => navigation.navigate("Login")}
     style={{ marginRight: 16 }}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </Text>
  );
};
