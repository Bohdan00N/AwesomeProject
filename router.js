import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/Home/Home';
import MapScreen from "./Screens/NestedScreens/MapScreen";

const MainStack = createStackNavigator();


export const useRoute = () => {
    return <MainStack.Navigator initialRouteName="Home">   
       <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false, title: "Регистрация"}}/>
       <MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false, title: "Вход"}}/>
       <MainStack.Screen name="Home" component={HomeScreen} options={{headerShown: false, title: "Публикации"}}/>
       <MainStack.Screen name="Map" component={MapScreen} options={{headerShown: true, title: "Карта"}} />
    </MainStack.Navigator>
}