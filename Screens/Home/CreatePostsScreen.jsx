import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

export function CreatePostsScreen() {
  const navigation = useNavigation();
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");

      let { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== "granted") {
        console.log("Дозвіл на доступ до місцезнаходження відхилено");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setCurrentLocation(coords);
    })();
  }, [photo]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const handleReset = () => {
    setName("");
    setPhoto("");
  };

  const handleSubmit = () => {
    navigation.navigate("Posts", { photo, name, currentLocation });
    handleReset();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {photo ? (
            <>
              <Image source={photo} style={styles.camera} />
              <Text
                dataDetectorType="link"
                style={{
                  fontSize: 14,
                  color: "#BDBDBD",
                }}
                onPress={() => setPhoto("")}
              >
                Сменить фото
              </Text>
            </>
          ) : (
            <Camera
              style={styles.camera}
              type={type}
              ref={(ref) => {
                setCameraRef(ref);
              }}
            >
              <View style={styles.photoView}>
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <MaterialIcons
                    name="flip-camera-ios"
                    size={28}
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      setPhoto(await MediaLibrary.createAssetAsync(uri));
                    }
                  }}
                >
                  <View style={styles.takePhotoOut}>
                    <Ionicons name="ios-camera" size={24} color="#BDBDBD" />
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
          )}
          <TextInput
            value={name}
            onChangeText={setName}
            style={{ ...styles.inputName, marginTop: 32 }}
            placeholder="Название..."
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            value={
              location ||
              (currentLocation
                ? `${currentLocation.latitude}, ${currentLocation.longitude}`
                : "")
            }
            onChangeText={setLocation}
            placeholderTextColor="#BDBDBD"
            style={{ ...styles.inputName, paddingLeft: 28 }}
            placeholder="Местность..."
          />

          <Text
            dataDetectorType="link"
            style={styles.inputIcon}
            onPress={() => navigation.navigate("Map", { currentLocation })}
          >
            <Ionicons name="ios-location-outline" size={24} color="#BDBDBD" />
          </Text>
          <TouchableOpacity
            style={name && photo ? styles.active_btn : styles.inactive_btn}
            onPress={handleSubmit}
          >
            <Text
              style={name && photo ? styles.active_text : styles.inactive_text}
            >
              Опубликовать
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={handleReset}>
            <AntDesign name="delete" size={(24, 14)} color="#BDBDBD" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  camera: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginTop: 32,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 0,
  },
  flipContainer: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  takePhotoOut: {
    backgroundColor: "#fff",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  inputName: {
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    width: 343,
    height: 50,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputIcon: {
    bottom: 58,
    left: 0,
  },
  takePhoto: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  active_btn: {
    backgroundColor: "#FF6C00",
    width: 343,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  inactive_btn: {
    backgroundColor: "#F6F6F6",
    width: 343,
    borderRadius: 100,
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: "#BDBDBD",
    textAlign: "center",
  },
  active_text: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  inactive_text: {
    color: "#BDBDBD",
    textAlign: "center",
  },
  deleteBtn: {
    top: 30,
    alignSelf: "center",
    Width: 70,
    height: 40,
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
  },
});
