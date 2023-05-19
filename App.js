import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Keyboard, View, ImageBackground, TouchableWithoutFeedback } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import backgroundImage from "./images/backgroundImage.png";
import LoginScreen from "./Screens/LoginScreen";
import {useFonts} from "expo-font"

export default function App() {
  const [fontsLoaded] = useFonts ({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
