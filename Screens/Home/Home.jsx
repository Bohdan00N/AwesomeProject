import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import { MaterialIcons, Feather, SimpleLineIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const BottomNav = createBottomTabNavigator();
  return (
    <BottomNav.Navigator
      initialRouteName="Posts"
      barStyle={{ backgroundColor: "#FF6C00" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Posts") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
            return <MaterialIcons name="add" size={28} color="#212121CC" />;
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-list-box" : "ios-list";
            return <Feather name="user" size={24} color="#212121CC" />;
          } else if (route.name === "Create") {
            iconName = focused ? "ios-list-box" : "ios-list";
            return <SimpleLineIcons name="grid" size={24} color="#212121CC" />;
          }
        },
        tabBarShowLabel: false
      })}
      
    >
      <BottomNav.Screen
        name="Create"
        component={CreatePostsScreen}
        // options={{
        //   headerTitle: () => <HeaderBackToPosts title="Создать публикацию" />,
        // }}
      />
      <BottomNav.Screen
        name="Posts"
        component={PostsScreen}
        // options={{ headerTitle: () => <HeaderPosts title="Публикации" /> }}
      />
      <BottomNav.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{ headerShown: false, title: "Профиль" }}
      />
    </BottomNav.Navigator>
  );
}
