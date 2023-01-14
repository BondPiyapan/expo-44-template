import { StyleSheet, Dimensions, View, Alert, Image, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, Checkbox } from "react-native-paper";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { getDatabase, ref, push } from "firebase/database";
import * as firebase from "firebase/storage";
import storage from "firebase/storage";
import { RootTabScreenProps } from "../../types";
import { useState } from "react";
import { Camera } from "expo-camera";
import DropdownModalBottom from "../../components/DropdownBottom";

const { width } = Dimensions.get("window");

export type Props = {
  navigation: any;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
});

export default function MainCreate({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const [buildingName, setBuildingName] = useState<string>();
  const [tempImage, setTempImage] = useState<string>();
  const [typeCheckList, setTypeCheckList] = useState<string>();
  const [detailType, setDetailType] = useState<string>();
  const [checked, setChecked] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const takePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Camera Permission",
        "Please give a camera permission in order to take a photo."
      );
      return;
    }

    const photo = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0.4,
    });
    if (!photo.cancelled) {
      const manipResult = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: 800, height: 600 } }],
        {
          compress: 0.4,
          format: ImageManipulator.SaveFormat.JPEG,
          base64: true,
        }
      );
      setTempImage(manipResult.uri);
    }
  };

  const openImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      quality: 0.5,
    });
    if (!result.cancelled) {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.uri,
        [{ resize: { height: 2000 } }],
        {
          compress: 0.5,
          format: ImageManipulator.SaveFormat.JPEG,
          base64: true,
        }
      );
      setTempImage(manipResult.uri);
    }
  };

  const sendData = async () => {
    if (!buildingName || !typeCheckList || !detailType || !tempImage) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนก่อนบันทึก");
    } else {
      setLoading(true);
      try {
        const res = await fetch(tempImage); // eslint-disable-line
        const blob = await res.blob();
        var filename = tempImage.split("/").pop();
        const storageGet = firebase.getStorage();
        const storageRef = firebase.ref(storageGet, filename);
        await firebase.uploadBytes(storageRef, blob);
        const url = await firebase.getDownloadURL(storageRef);
        const db = getDatabase();
        await push(
          ref(
            db,
            "dataCheckBuilding/" + buildingName.toString().replace("/", "-")
          ),
          {
            buildingName,
            tempImage: url,
            typeCheckList,
            detailType,
          }
        );
        setLoading(false);
        await navigation.goBack();
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ marginTop: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          onChangeText={(text) => setBuildingName(text)}
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
          label="บ้านเลขที่"
          placeholder="บ้านเลขที่"
          underlineColorAndroid="transparent"
        />
        <View
          style={{
            marginTop: 16,
          }}
        />
        <DropdownModalBottom
          value={typeCheckList}
          modalTitle="รายการตรวจ"
          label="รายการตรวจ"
          values={["งานสี & ผนัง", "ไฟฟ้า", "ประปา", "กระเบื้อง", "ทั่วไป"]}
          setValue={(v) => setTypeCheckList(v)}
        />
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox.Android
              color="#37dac3"
              status={checked === 'pass' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('pass');
              }}
            />
            <Text style={{
              color: '#3a3c3f',
              fontFamily: 'sukhumvit-set',
              fontSize: 16,
            }}
            >
              เรียบร้อย
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox.Android
              color="#37dac3"
              status={checked === 'notPass' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('notPass');
              }}
            />
            <Text style={{
              color: '#3a3c3f',
              fontFamily: 'sukhumvit-set',
              fontSize: 16,
            }}
            >
              ไม่เรียบร้อย
            </Text>
          </View>
        </View> */}
        <TextInput
          onChangeText={(textDetail) => setDetailType(textDetail)}
          mode="outlined"
          style={{
            backgroundColor: "#fff",
            width: width * 0.9,
            justifyContent: "center",
            height: 200,
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
          multiline
          label="รายละเอียดการตรวจ"
          placeholder="รายละเอียดการตรวจ"
          underlineColorAndroid="transparent"
        />
        {tempImage ? (
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: width * 0.8, height: 300 }}
              resizeMode="contain"
              source={{ uri: tempImage }}
            />
            <Button
              transparentRed
              label="ลบรูปภาพ"
              onPress={() => setTempImage("")}
            />
          </View>
        ) : (
          <View style={{ marginTop: 16 }}>
            <Button label="ถ่ายรูปภาพ" onPress={takePhoto} />
            <View style={{ marginTop: 16 }} />
            <Button label="เลือกรูปจากคลัง" onPress={openImagePicker} />
          </View>
        )}
      </KeyboardAwareScrollView>
      <View style={{ width: "90%", marginBottom: 16 }}>
        <Button loading={loading} green label="บันทึก" onPress={sendData} />
      </View>
    </View>
  );
}
