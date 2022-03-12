import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
import CarItem from "./component/CarItem";
import carList from "./component/CarList";
import CarList from "./component/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<CarItem*/}
      {/*    name={"Model 3"}*/}
      {/*    tagline={"Order Online for"}*/}
      {/*    taglineCTA={"Touchless Delivery"}*/}
      {/*    image={require('./assets/images/Model3.jpeg')}*/}
      {/*/>*/}

        <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },


});
