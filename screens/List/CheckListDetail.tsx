import {
  StyleSheet, Dimensions, View, Alert, Image, Text
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput, Checkbox } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { getDatabase, ref, update, onValue } from "firebase/database"
import { RootTabScreenProps } from '../../types'
import * as firebase from 'firebase/storage'
import { useEffect, useState } from 'react'
import { Camera } from 'expo-camera'
import DropdownModalBottom from '../../components/DropdownBottom'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window')

export type Props = {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})

type ICustomer = {
  buildingName: string;
  detailType: string;
  typeCheckList: string;
  tempImage: string;
  tempImageRepair: string;
  status: string;
  reason: string;
}

export default function CheckListDetail({ route: { params } }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [buildingName, setBuildingName] = useState<string>()
  const [tempImage, setTempImage] = useState<string>()
  const [tempImageRepair, setTempImageRepair] = useState<string>()
  const [typeCheckList, setTypeCheckList] = useState<string>()
  const [detailType, setDetailType] = useState<string>()
  const [checked, setChecked] = useState<string>()
  const [reason, setReason] = useState<string>()
  const [dataListAll, setDataListAll] = useState<ICustomer>()
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'dataCheckBuilding/' + params.key + '/' + params.id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      setChecked(data.checked)
      setDataListAll(data)
    })
  }, [])

  const sendData = async () => {
      if (!tempImageRepair) {
        alert('กรุณาถ่ายรูปตอนแก้ไขแล้ว')
      } else {
        try {
          setLoading(true);
          const res = await fetch(tempImageRepair) // eslint-disable-line
          const blob = await res.blob()
          var filename = tempImageRepair.split("/").pop()
          const storageGet = firebase.getStorage()
          const storageRef = firebase.ref(storageGet, filename)
          await firebase.uploadBytes(storageRef, blob)
          const url = await firebase.getDownloadURL(storageRef)
          const db = getDatabase();
          const postData = {
            reason,
            buildingName: dataListAll?.buildingName,
            detailType: dataListAll?.detailType,
            tempImage: dataListAll?.tempImage,
            tempImageRepair: url,
            typeCheckList: dataListAll?.typeCheckList
          }
          const updates = {};
          updates['dataCheckBuilding/' + params.key + '/' + params.id] = postData;
          await update(ref(db), updates)
          await setLoading(false);
          await navigation.goBack()
        } catch (error) {
          console.log(error)
          setLoading(false);
        }
      }
    }

  const takePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Camera Permission', 'Please give a camera permission in order to take a photo.')
      return
    }

    const photo = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0.4,
    })
    if (!photo.cancelled) {
      const manipResult = await ImageManipulator.manipulateAsync(photo.uri,
        [{ resize: { width: 800, height: 600 } }],
        { compress: 0.4, format: ImageManipulator.SaveFormat.JPEG, base64: true },
      )
      setTempImageRepair(manipResult.uri)
    }
  }

  const openImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!')
      return
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      quality: 0.4,
    })
    if (!result.cancelled) {
      const manipResult = await ImageManipulator.manipulateAsync(result.uri,
        [{ resize: { width: 800, height: 600 } }],
        { compress: 0.4, format: ImageManipulator.SaveFormat.JPEG, base64: true },
      )
      setTempImageRepair(manipResult.uri)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ marginTop: 16 }} showsVerticalScrollIndicator={false}>
        <TextInput
          disabled
          value={dataListAll?.buildingName.toString().replace('-', '/')}
          mode="outlined"
          style={{
            backgroundColor: '#fff',
            width: width * 0.9,
            justifyContent: 'center',
          }}
          theme={{
            roundness: 8,
            colors: {
              placeholder: '#616569',
              primary: '#37dac3',
            },
            fonts: {
              regular: {
                fontFamily: 'sukhumvit-set',
              },
            },
          }}
          label="บ้านเลขที่"
          placeholder="บ้านเลขที่"
          underlineColorAndroid="transparent"
        />
        <View style={{
          marginTop: 16,
        }} />
        <DropdownModalBottom
          disabled
          value={dataListAll?.typeCheckList}
          modalTitle="รายการตรวจ"
          label="รายการตรวจ"
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
          disabled
          value={dataListAll?.detailType}
          mode="outlined"
          style={{
            backgroundColor: '#fff',
            width: width * 0.9,
            justifyContent: 'center',
            height: 200,
          }}
          theme={{
            roundness: 8,
            colors: {
              placeholder: '#616569',
              primary: '#37dac3',
            },
            fonts: {
              regular: {
                fontFamily: 'sukhumvit-set',
              },
            },
          }}
          multiline
          label="รายละเอียดงาน"
          placeholder="กรอกรายละเอียดงาน"
          underlineColorAndroid="transparent"
        />
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: width * 0.8, height: 300 }}
            resizeMode="contain"
            source={{ uri: dataListAll?.tempImage }}
          />
        </View>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
      <View style={{ 
        width: '100%',
        height: 1,
        backgroundColor: '#C2C9D1',
        marginBottom: 16,
        }}
        />
        {dataListAll?.tempImageRepair ? (
          <View>
                    <View style={{ alignItems: "center" }}>
                    <Text style={{
              fontFamily: 'sukhumvit-set-bold',
              fontSize: 18,
              color: '#000',
              textAlign: 'center',
              marginVertical: 16,
            }}>
              รูปแก้ไขแล้ว
            </Text>
          <Image
            style={{ width: width * 0.8, height: 300 }}
            resizeMode="contain"
            source={{ uri: dataListAll?.tempImageRepair }}
          />
          { dataListAll?.reason && (
            <TextInput
            value={dataListAll?.reason}
            disabled
            onChangeText={(textReason) => setReason(textReason)}
            mode="outlined"
            style={{
              backgroundColor: '#fff',
              width: width * 0.9,
              justifyContent: 'center',
              height: 200,
            }}
            theme={{
              roundness: 8,
              colors: {
                placeholder: '#616569',
                primary: '#37dac3',
              },
              fonts: {
                regular: {
                  fontFamily: 'sukhumvit-set',
                },
              },
            }}
            multiline
            label="คำอธิบายขั้นตอนแก้ไข (ถ้ามี)"
            placeholder="คำอธิบายขั้นตอนแก้ไข (ถ้ามี)"
            underlineColorAndroid="transparent"
          />
          )}
        </View>
          </View>
        ) : (
          <View>
        <Text style={{
              fontFamily: 'sukhumvit-set-bold',
              fontSize: 18,
              color: '#000',
              textAlign: 'center',
              marginVertical: 16,
            }}>
              ถ่ายรูปแก้ไขแล้ว
            </Text>
        {tempImageRepair ? (
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: width * 0.8, height: 400 }}
              source={{ uri: tempImageRepair }}
            />
            <View style={{ marginTop: 16 }} />
            <Button transparentRed label="ลบรูปภาพ" onPress={() => setTempImageRepair('')} />
          </View>
        ) : (<View>
          <Button label="ถ่ายรูปภาพ" onPress={takePhoto} />
          <View style={{ marginTop: 16 }} />
          <Button label="เลือกรูปจากคลัง" onPress={openImagePicker} />
        </View>)}
          <TextInput
            value={dataListAll?.reason}
            onChangeText={(textReason) => setReason(textReason)}
            mode="outlined"
            style={{
              backgroundColor: '#fff',
              width: width * 0.9,
              justifyContent: 'center',
              height: 200,
            }}
            theme={{
              roundness: 8,
              colors: {
                placeholder: '#616569',
                primary: '#37dac3',
              },
              fonts: {
                regular: {
                  fontFamily: 'sukhumvit-set',
                },
              },
            }}
            multiline
            label="คำอธิบายขั้นตอนแก้ไข (ถ้ามี)"
            placeholder="คำอธิบายขั้นตอนแก้ไข (ถ้ามี)"
            underlineColorAndroid="transparent"
          />
        </View>
        
        )}
        </KeyboardAwareScrollView>
        {!dataListAll?.tempImageRepair && (
      <View style={{ width: '90%', marginBottom: 16 }}>
      <Button green label="บันทึก" onPress={sendData} />
    </View>
        )}
    </View>
  )
}
