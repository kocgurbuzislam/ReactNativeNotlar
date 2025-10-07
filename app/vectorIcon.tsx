import { StyleSheet, View, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


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