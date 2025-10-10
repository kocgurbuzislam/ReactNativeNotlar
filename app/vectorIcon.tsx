import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, View } from "react-native";


export default function FlexBox_2() {
  return (
    <View style={styles.container}>
      
      <AntDesign name="apple" size={50} color="#ff0000ff" />
      <AntDesign name="apple" size={50} color="#026f10ff" />


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