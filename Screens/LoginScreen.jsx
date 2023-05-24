import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import backgroundImage from "../assets/images/backgroundImage.png";
import { useNavigation } from "@react-navigation/native";
export default LoginScreen = () => {
  const navigation = useNavigation();

  const [passwordView, setPasswordView] = useState(true);
  const handlePress = () => {
    setPasswordView(!passwordView);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const handleFocus1 = () => {
    setIsFocused1(true);
  };

  const handleBlur1 = () => {
    setIsFocused1(false);
  };

  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = () => {
    setIsFocused2(false);
  };
  const inputStyles1 = [styles.input, isFocused1 && styles.inputFocused];

  const inputStyles2 = [styles.input, isFocused2 && styles.inputFocused];

  const onLogin = () => {
    console.log("Email:", email, "Password:", password);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.background}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <Text style={styles.titleForm}>Войти</Text>
              <TextInput
                style={inputStyles1}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                onFocus={handleFocus1}
                onBlur={handleBlur1}
                value={email}
                onChangeText={setEmail}
              />
              <View>
                <TextInput
                  style={inputStyles2}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  onFocus={handleFocus2}
                  onBlur={handleBlur2}
                  autoComplete="password"
                  secureTextEntry={passwordView}
                  value={password}
                  onChangeText={setPassword}
                ></TextInput>
                <Text
                  style={styles.showPassword}
                  dataDetectorType="link"
                  onPress={handlePress}
                >
                  Показать
                </Text>
              </View>

              <Pressable style={styles.button} onPress={onLogin}>
                <Text style={styles.textButton}>Войти</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.textButtonLogIn}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  form: {
    marginTop: 320,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
    height: 489,
    alignItems: "center",
  },
  titleForm: {
    marginTop: 32,
    color: "#212121",
    fontSize: 30,
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
  },
  input: {
    fontFamily: "Roboto-Regular",
    height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
  },
  inputFocused: {
    backgroundColor: "#FFF",
    borderColor: "#FF6C00",
  },
  showPassword: {
    color: "#1B4371",
    position: "absolute",
    bottom: 32,
    left: 255,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  button: {
    backgroundColor: "#FF6C00",
    width: 343,
    height: 51,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginBottom: 16,
    marginTop: 27,
  },
  textButton: {
    fontFamily: "Roboto-Regular",
    color: "#fff",
    fontSize: 16,
  },
  textButtonLogIn: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
  },
});
