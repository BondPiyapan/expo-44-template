import { Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { Text, View } from '../components/Themed';
import { clearAuth } from '../redux/slices/user.slice';

export default function TabTwoScreen() {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Login" onPress={() => {
        dispatch(clearAuth())
      }} />
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
});
