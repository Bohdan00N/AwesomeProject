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
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import backgroundImage from "../assets/images/backgroundImage.png";
import Add from "../assets/images/add.svg";
import Del from "../assets/images/del.svg";
import { useNavigation } from "@react-navigation/native";

export default RegistrationScreen = () => {
  //
  const navigation = useNavigation();
  const [passwordView, setPasswordView] = useState(true);
  const [avatarSource, setAvatarSource] = useState();
  const addImg = () => {};
  const delImg = () => {
    setAvatarSource(null);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const onLogin = () => {
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.background}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <View style={styles.avatarForm}>
                <Image source={avatarSource} style={styles.tinyAvatar} />
                {avatarSource ? (
                  <Pressable style={styles.delPhoto} onPress={delImg}>
                    <Del />
                  </Pressable>
                ) : (
                  <Pressable style={styles.addPhoto} onPress={addImg}>
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
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={inputStyles2}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                onFocus={handleFocus2}
                onBlur={handleBlur2}
                value={email}
                onChangeText={setEmail}
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
                <Text style={styles.textButton}>Зарегистрироваться</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.textButtonLogIn}>
                  Уже есть аккаунт? Войти
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
    marginTop: 263,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 549,
    alignItems: "center",
  },
  tinyAvatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    bottom: 60,
  },
  addPhoto: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 107,
    top: 20,
  },
  delPhoto: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 100,
    top: 15,
  },
  titleForm: {
    fontFamily: "Roboto-Medium",
    marginTop: -28,
    color: "#212121",
    fontSize: 30,
    marginBottom: 33,
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
    fontFamily: "Roboto-Regular",
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
