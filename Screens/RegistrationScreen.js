import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Add from "../images/add.svg";
import Del from "../images/del.svg";

export default RegistrationScreen = () => {
  const [passwordView, setPasswordView] = useState(true);
  const [avatarSource, setAvatarSource] = useState(null);

  const addImg = () => {};
  const delImg = () => {
    setAvatarSource(null);
  };

  const handlePress = () => {
    setPasswordView(!passwordView);
  };
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

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

  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur3 = () => {
    setIsFocused3(false);
  };

  const inputStyles1 = [styles.input, isFocused1 && styles.inputFocused];

  const inputStyles2 = [styles.input, isFocused2 && styles.inputFocused];

  const inputStyles3 = [styles.input, isFocused3 && styles.inputFocused];

  return (
    <View
      style={styles.container}
      accessibilityIgnoresInvertColors={true}
      ref={this._captureRef}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ ...styles.keyBox, marginBottom: isFocused1 ? 15 : 100 }}>
          <View style={styles.avatarForm}>
            <Image source={avatarSource} style={styles.tinyAvatar} />
            {avatarSource ? (
              <Pressable style={styles.addPhoto} onPress={delImg}>
                <Del />
              </Pressable>
            ) : (
              <Pressable onPress={addImg} style={styles.addPhoto}>
                <Add />
              </Pressable>
            )}
          </View>
          <Text style={styles.titleForm}>Регистрация</Text>
          <TextInput
            style={inputStyles1}
            placeholder="Имя"
            placeholderTextColor="#BDBDBD"
            onFocus={handleFocus1}
            onBlur={handleBlur1}
          />
          <TextInput
            style={inputStyles2}
            placeholder="Адрес электронной почты"
            placeholderTextColor="#BDBDBD"
            onFocus={handleFocus2}
            onBlur={handleBlur2}
          />
          <View>
            <TextInput
              style={inputStyles3}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              onFocus={handleFocus3}
              onBlur={handleBlur3}
              autoComplete="password"
              secureTextEntry={passwordView}
            ></TextInput>
            <Text
              style={styles.showPassword}
              dataDetectorType="link"
              onPress={handlePress}
            >
              Показать
            </Text>
          </View>

          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Зарегистрироваться</Text>
          </Pressable>
          <Text dataDetectorType="link" style={styles.textButtonLogIn}>
            Уже есть аккаунт? Войти
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.67,
    backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    top: 138,
  },
  keyBox: {
    paddingBottom: 1,
  },
  tinyAvatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    bottom: 60,
    left: 110,
  },
  addPhoto: {
    width: 25,
    height: 25,
    position: "absolute",
    right: 101,
    top: 20,
  },
  titleForm: {
    marginTop: -28,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 33,
  },
  input: {
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
    color: "#fff",
    fontSize: 16,
  },
  textButtonLogIn: {
    color: "#1B4371",
    fontSize: 16,
    left: 75,
  },
});
