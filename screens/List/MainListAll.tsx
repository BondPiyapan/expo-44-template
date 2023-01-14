import {
  StyleSheet, Dimensions, View, Alert, Image, Text, TouchableOpacity
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

export default function MainListAll({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch()
  const [dataListAll, setDataListAll] = useState<string[]>()
  const [buildingName, setBuildingName] = useState<string>()
  const [tempImage, setTempImage] = useState<string>()
  const [typeCheckList, setTypeCheckList] = useState<string>()
  const [detailType, setDetailType] = useState<string>()
  const [checked, setChecked] = useState<string>()

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'dataCheckBuilding/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setDataListAll(data)
    })
  }, [])

  return (
    <View style={styles.container}>
      {_map(dataListAll, (v, index) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate('DetailList' as never,  {key: index} as never)}
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
            บ้านเลขที่ : {index.toString().replace('-', '/')}
          </Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}
