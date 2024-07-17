import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// importing custom components
import Greet from './components/Greet';
import ShowImage from './components/ShowImage';

export default function App() {
  const UserName = "Red Velvet Cake (Android 11)";
  const imgSrc = require('./assets/react-vector.png');
  return (
    <View style={styles.container}>
        <ShowImage theSource={imgSrc} />
        <Greet username={UserName}/>
      <Text>Copyright of RVC Group</Text>
      <StatusBar style="auto" />
    </View>
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
