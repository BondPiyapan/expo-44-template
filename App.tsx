import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import store from './redux/store'
import { initializeApp } from 'firebase/app'
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native'
import { useEffect, useRef, useState } from 'react'

const firebaseConfig = {
  apiKey: "AIzaSyC9rBu3jeeLrEmfdwZ2O4lCRC0POcb2gV0",
  authDomain: "study-dusit-1.firebaseapp.com",
  databaseURL: "https://study-dusit-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "study-dusit-1",
  storageBucket: "study-dusit-1.appspot.com",
  messagingSenderId: "444403855888",
  appId: "1:444403855888:web:fe811b41f1f3589a769095",
  measurementId: "G-TM0PN1N52R"
}

initializeApp(firebaseConfig)

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (!isLoadingComplete) {
    return null
  }
  return (
    <Provider store={store}>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </Provider>
  )
}
