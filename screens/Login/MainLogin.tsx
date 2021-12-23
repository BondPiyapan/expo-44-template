import { Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
const { height, width } = Dimensions.get('window')
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { getUser } from '../../redux/selectors/user.selectors';
import { setAuth } from '../../redux/slices/user.slice';
import { RootTabScreenProps } from '../../types';

export default function MainLogin({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={{ alignItems: "center", marginTop: 16, marginBottom: 32 }}>
        <TextInput
          mode="outlined"
          style={{
            backgroundColor: "#fff",
            width: width * .9,
            justifyContent: "center",
          }}
          theme={{
            roundness: 8,
            colors: {
              placeholder: "#616569",
              primary: "#c03850",
            },
            fonts: {
              regular: {
                fontFamily: "sukhumvit-set",
              },
            },
          }}
          label="ชื่อผู้ใช้งาน"
          placeholder={"ชื่อผู้ใช้งาน"}
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          mode="outlined"
          style={{
            backgroundColor: "#fff",
            width: width * .9,
            justifyContent: "center",
            marginTop: 16
          }}
          theme={{
            roundness: 8,
            colors: {
              placeholder: "#616569",
              primary: "#c03850",
            },
            fonts: {
              regular: {
                fontFamily: "sukhumvit-set",
              },
            },
          }}
          label="รหัสผ่าน"
          placeholder={"รหัสผ่าน"}
          secureTextEntry
          underlineColorAndroid={"transparent"}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(setAuth({
            user: 'Login',
            // supplier: supplier ? { id: supplier.id, ...supplier.data() } : undefined,
          }))
        }}
        style={[styles.button, styles.buttonMobile]}>
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    height: 52,
    width: width * .9,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#c03850',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
});
