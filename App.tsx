import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoading] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato/Lato-Regular.ttf")
  })

  if (!fontsLoading) {
    return <AppLoading />;
  }


  return (
    <Welcome />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
