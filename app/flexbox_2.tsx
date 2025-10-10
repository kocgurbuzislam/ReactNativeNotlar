
import { StyleSheet, View } from "react-native";

export default function FlexBox_2() {
  return (
    <View style={styles.container}>
      <View style={{ height: "80%", width: "90%", backgroundColor: "#918f8fff", }}>

        <View style={{ flex: 1, backgroundColor: "red" }}></View>
        <View style={{ flex: 1, backgroundColor: "blue" }}></View>
        <View style={{ flex: 1, backgroundColor: "black" }}></View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});