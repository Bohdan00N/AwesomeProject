import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Goback = () => {
  const navigation = useNavigation();
  return (
    <Text
      dataDetectorType="link"
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 16 }}
    >
      <Ionicons name="arrow-back" size={24} color="#212121CC" />
    </Text>
  );
};
