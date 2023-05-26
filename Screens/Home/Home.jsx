import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { Out } from "../../Components/Out";
import { Goback } from "../../Components/GoBack";

export default function HomeScreen() {
  const BottomNav = createBottomTabNavigator();

  return (
    <BottomNav.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Roboto-Medium", fontSize: 17 },
        headerStyle: {
          borderBottomColor: "#B3B3B3",
          borderBottomWidth: 0.5,
          backgroundColor: "#FFFFFF",
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "#B3B3B3",
          borderTopWidth: 0.5,
          height: 70,
        },
        tabBarIcon: () => {},
      }}
    >
      <BottomNav.Screen
        options={() => ({
          title: "Публикации",
          headerRight: () => <Out />,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabIconFocused : styles.tabIcon}>
              <SimpleLineIcons
                name="grid"
                size={24}
                color={focused ? "#fff" : "#212121CC"}
              />
            </View>
          ),
        })}
        name="Публикации"
        component={PostsScreen}
      />
      <BottomNav.Screen
        options={() => ({
          title: "Создать публикацию",
          headerLeft: () => <Goback />,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabIconFocused : styles.tabIcon}>
              <Feather
                name="plus"
                h
                size={28}
                color={focused ? "#fff" : "#212121CC"}
              />
            </View>
          ),
        })}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <BottomNav.Screen
        options={() => ({
          title: "Профиль",
          headerRight: () => <Out />,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabIconFocused : styles.tabIcon}>
              <Feather
                name="user"
                size={24}
                color={focused ? "#fff" : "#212121CC"}
              />
            </View>
          ),
        })}
        name="Профиль"
        component={ProfileScreen}
      />
    </BottomNav.Navigator>
  );
}
const styles = StyleSheet.create({
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconFocused: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    padding: 5,
  },
});
