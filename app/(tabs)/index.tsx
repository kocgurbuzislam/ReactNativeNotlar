import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: 350,height: 100,//backgroundColor: "#E8E8E8", 
        flexDirection: "row" /*coulmn*/
      }}>

        <View style={{
          //backgroundColor: "#FFF1C8",
          alignItems: "center",//flex-start, center, flex-end
          justifyContent: "center",//flex-start, center, flex-end, space-between, space-around
          flex: 2
        }}>
          <View style={{width: 70, height: 70,borderRadius: 35,
            backgroundColor: "gray",

          }}></View>
        </View>
        <View style={{ justifyContent: "center", flex: 4/*2*/ }}>

          <Text style={{ fontSize: 17, fontWeight: "bold" }}> iso kgb </Text>

          <Text style={{ fontSize: 14, color: "gray", marginTop: 5 }}>
            isokgb@gmail.com
          </Text>
        </View>
        <View style={{
          //backgroundColor: "#A0E7E5", 
          alignContent: "center",
          justifyContent: "center",
          flex: 1/*2*/
        }}>

          <Text style={{fontSize: 30,fontWeight: "bold",color: "black",
      }}>
            {">"}
          </Text>
        </View>
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
