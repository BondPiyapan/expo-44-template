import { useRef } from 'react'
import {
  StyleSheet, Text, View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import Button from '../components/Button'

import { clearAuth } from '../redux/slices/user.slice'
import { RootTabScreenProps } from '../types'
import LottieView from 'lottie-react-native'

export type Props = {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch()
  const animation = useRef<any>(null)
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <LottieView
          ref={animation}
          style={{
            width: 350,
            height: 350,
            backgroundColor: '#fff',
          }}
          source={require("../assets/lottie/56151-engineer.json")}
          autoPlay
          loop
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
        </View>
      <View style={{ padding: 16, justifyContent: 'center', flex: 0.8 }}>
      <Button onPress={() => navigation.navigate('MainCreate')} label="สร้างรายการแก้ไขชำรุดบกพร่อง" />
      <View style={{ marginVertical: 16 }} />
      <Button label="ตรวจสอบรายการแก้ไขชำรุดบกพร่อง" onPress={() => navigation.navigate('MainListAll')}/>
      </View>
      <View style={{
        flex:0.2,
        justifyContent: 'flex-end',
        marginBottom: 16,
        padding: 16,
      }}>
        <Button onPress={()=> dispatch(clearAuth())} transparentRed label="ออกจากระบบ" />
      </View>
    </View>
  )
}
