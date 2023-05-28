import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useRoute } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

export default function App() {
  const [user, setUser] = useState(null);
  const routing = useRoute();
  onAuthStateChanged(auth, (user) => {
  setUser(user);
  });

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
