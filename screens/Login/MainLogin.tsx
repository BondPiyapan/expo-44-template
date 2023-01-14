import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native-paper";
import { useEffect, useRef, useState } from "react";
import { setAuth } from "../../redux/slices/user.slice";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    height: 52,
    width: width * 0.9,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonMobile: {
    backgroundColor: "#37dac3",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "sukhumvit-set",
  },
});

export default function MainLogin() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errorUser, setErrorUser] = useState<boolean>();
  const [errorPassword, setErrorPassword] = useState<boolean>();
  const animation = useRef<any>(null);

  useEffect(() => {
    animation.current.play();
  }, []);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? "position" : null}
        behavior={"position"}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}
      >
        <View style={{ alignItems: "center" }}>
          <LottieView
            ref={animation}
            style={{
              width: 350,
              height: 350,
              backgroundColor: "#fff",
            }}
            source={require("../../assets/lottie/lf30_editor_nnbttwjx.json")}
            autoPlay
            loop
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
        </View>
        <Text
          style={{
            color: "#000",
            fontFamily: "sukhumvit-set-bold",
            fontSize: 18,
            padding: 16,
            textAlign: "center",
          }}
        >
          แอปพลิเคชันฯ การบริการหลังการขายใน
        </Text>
        <Text
          style={{
            color: "#000",
            fontFamily: "sukhumvit-set-bold",
            fontSize: 18,
            padding: 16,
            textAlign: "center",
            marginTop: -16,
          }}
        >
          โครงการหมู่บ้านวรารมย์
        </Text>
        <View style={{ alignItems: "center", marginTop: 16, marginBottom: 32 }}>
          <TextInput
            mode="outlined"
            style={{
              backgroundColor: "#fff",
              width: width * 0.9,
              justifyContent: "center",
            }}
            theme={{
              roundness: 8,
              colors: {
                placeholder: "#616569",
                primary: "#37dac3",
              },
              fonts: {
                regular: {
                  fontFamily: "sukhumvit-set",
                },
              },
            }}
            label="ชื่อผู้ใช้งาน"
            placeholder="ชื่อผู้ใช้งาน"
            underlineColorAndroid="transparent"
            onChangeText={(text) => {
              setUser(text);
              setErrorUser(false);
              console.log(errorUser);
            }}
            error={errorUser}
          />
          <TextInput
            mode="outlined"
            style={{
              backgroundColor: "#fff",
              width: width * 0.9,
              justifyContent: "center",
              marginTop: 16,
            }}
            theme={{
              roundness: 8,
              colors: {
                placeholder: "#616569",
                primary: "#37dac3",
              },
              fonts: {
                regular: {
                  fontFamily: "sukhumvit-set",
                },
              },
            }}
            label="รหัสผ่าน"
            placeholder="รหัสผ่าน"
            secureTextEntry
            underlineColorAndroid="transparent"
            onChangeText={(text) => {
              setPassword(text);
              setErrorPassword(false);
            }}
            error={errorPassword}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              if (!user && !password) {
                Alert.alert("กรุณากรอก ชื่อผู้ใช้ และ รหัสผ่าน");
                setErrorUser(true);
                setErrorPassword(true);
              } else if (user === "technician") {
                dispatch(
                  setAuth({
                    user: "LoginTechnician",
                  })
                );
              } else {
                dispatch(
                  setAuth({
                    user: "Login",
                  })
                );
              }
            }}
            style={[styles.button, styles.buttonMobile]}
          >
            <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
