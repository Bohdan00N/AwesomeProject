import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import Avatar from "../../assets/images/avatar.png";

export default function RegPostsScreen() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const { params } = useRoute();

  useEffect(() => {
    if (params) {
      setPosts((prevState) => [...prevState, params]);
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.imgAvatar} source={Avatar}></Image>
        <View style={styles.userInfo}>
          <Text style={styles.login}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={styles.post}>
              <Image style={{ flex: 1 }} source={item.photo}></Image>
            </View>
            <Text style={styles.titlePost}>{item.name}</Text>
            <View style={styles.postInfo}>
              <TouchableOpacity
                style={styles.commentsContainer}
                onPress={() => navigation.navigate("Comments")}
              >
                <EvilIcons name="comment" size={24} color="black" />
                <Text style={styles.comments}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.commentsContainer}
                onPress={() =>
                  navigation.navigate("Map", {
                    currentLocation: params.currentLocation,
                  })
                }
              >
                <Ionicons
                  name="ios-location-outline"
                  size={24}
                  color="#BDBDBD"
                />
                <Text style={styles.region}>Kiev</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingTop: 32,
  },
  imgAvatar: {
    width: 60,
    height: 60,
    marginRight: 8,
    marginLeft: 0,
    padding: 0,
  },
  userInfo: {
    height: 15,
  },
  login: {
    fontSize: 13,
    fontWeight: 700,
    color: "#212121",
  },
  email: {
    fontSize: 11,
    fontWeight: 400,
    color: "#212121",
  },
  post: {
    position: "relative",
    marginTop: 32,
    marginBottom: 8,
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: 330,
    maxWidth: 343,
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
  },
  titlePost: {
    fontSize: 16,
    color: "#212121",
  },
  postInfo: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
  },
  imgComments: {
    width: 24,
    height: 24,
  },
  commentsContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  comments: {
    marginLeft: 6,
    fontSize: 16,
    color: "#BDBDBD",
  },
  region: {
    marginLeft: 4,
    color: "#212121",
    textDecorationLine: "underline",
  },
  postCard: {
    marginBottom: 32,
    justifyContent: "center",
  },
});
