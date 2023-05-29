import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./Home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { authStateChangeUseThunk } from "../redux/auth/authOperations";

const MainStack = createStackNavigator();

function MainRoute() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.isUser);

  useEffect(() => {
    dispatch(authStateChangeUseThunk());
  }, [state]);

  return (
    <NavigationContainer>
      {!state ? (
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false, title: "Регистрация" }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, title: "Вход" }}
          />
        </MainStack.Navigator>
      ) : (
        <MainStack.Navigator>
          <MainStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false, title: "Публикации" }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}
export default MainRoute;
