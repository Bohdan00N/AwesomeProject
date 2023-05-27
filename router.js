import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/Home/Home";
import MapScreen from "./Screens/NestedScreens/MapScreen";


const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false, title: "Регистрация" }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, title: "Вход" }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, title: "Публикации" }}
      />
      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: true, title: "Карта" }}
      />
    </MainStack.Navigator>
  );
};
