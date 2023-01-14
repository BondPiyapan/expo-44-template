import {
  StyleSheet, Dimensions, View, Alert, Image, Text, TouchableOpacity, ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput, Checkbox } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { getDatabase, ref, push, onValue } from "firebase/database"
import { RootTabScreenProps } from '../../types'
import { useEffect, useState } from 'react'
import { Camera } from 'expo-camera'
import _map from 'lodash/map'
import DropdownModalBottom from '../../components/DropdownBottom'
import { MaterialIcons } from '@expo/vector-icons'
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
  typeCheckList: string;
  checked: string;
  tempImageRepair: string;
}

export default function DetailList({ route: { params } }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [dataListAll, setDataListAll] = useState<string[]>()
  const [buildingName, setBuildingName] = useState<string>()
  const [tempImage, setTempImage] = useState<string>()
  const [typeCheckList, setTypeCheckList] = useState<string>()
  const [detailType, setDetailType] = useState<string>()
  const [checked, setChecked] = useState<string>()

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'dataCheckBuilding/' + params.key);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setDataListAll(data)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: 'sukhumvit-set-bold',
        fontSize: 20,
        color: '#000',
        marginTop: 16
      }}>
        บ้านเลขที่ : {params.key.toString().replace('-', '/')}
      </Text>
      <ScrollView style={{
        flex: 1,
        width: '100%'
      }} showsVerticalScrollIndicator={false}>
        {_map(dataListAll, (v : ICustomer, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CheckListDetail' as never, { key: params.key, id: index  } as never)}
            style={{
              padding: 16,
              borderBottomWidth: 0.5,
              width: '100%',
              borderColor: '#ccc',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }} key={index}>
            <Text style={{
              fontFamily: 'sukhumvit-set',
              fontSize: 16,
              color: '#000'
            }}>
              ประเภท : {v.typeCheckList}
            </Text>
            <Text style={{
              fontFamily: 'sukhumvit-set',
              fontSize: 16,
              color: v.tempImageRepair ? '#3CC13B' : '#FF9900'
            }}>
              {v.tempImageRepair ? 'แก้ไขเรียบร้อย' : 'รอทีมช่างแก้ไข'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
