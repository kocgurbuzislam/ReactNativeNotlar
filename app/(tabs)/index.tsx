import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Image } from 'react-native';
import { ArrowFunction } from '../functionComponents/ArrowFunction';
import { Person } from '../props/Person';
import { Counter } from '../stateKullanimi/Counter';
import { Foo3 } from '../LifecycleKullanimi/Foo3';
import { Counter2 } from '../useEffectKullanimi/Counter2';
import ModalKullanimi from '../modalKullanimi/ModalKullanimi';
import { Box } from '../touchableOpacityKullanimi/Box';
import Box2 from '../TouchableWithoutFeedbackKullanimi/Box2';
import ActivityIndicatorKullanimif from '../activityIndicatorKullanimi/ActivityIndicator';
import { MyButton } from '../activityIndicatorKullanimi/MyButton';
import Switchf from '../switchKullanimi/Switchf';
import BoxScroll from '../scrollKullanimi/BoxScroll';
import FlatListf from '../flatListKullanimi/FlatListf';
import { Images } from '../flatListKullanimi/Images';
import { Message } from '../flatListKullanimi/Message';
import { MessageList } from '../flatListKullanimi/MessageList';
export default function HomeScreen() {
  return (
    <View style={styles.container}>


      <MessageList/>
      




      {/*
      <FlatList
      data={Images}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Image style={{width:150, height:150}} source={{uri:item.image}}/>}
      >
      </FlatList>
       <FlatListf/>
      <ScrollView>
        <BoxScroll text={"Text1"} color={"#ff1a1aff"} />
        <BoxScroll text={"Text2"} color={"#1e6cdaff"} />
        <BoxScroll text={"Text3"} color={"#16bd29ff"} />
        <BoxScroll text={"Text4"} color={"#0a3d69ff"} />
        <BoxScroll text={"Text5"} color={"#57074aff"} />
        <BoxScroll text={"Text6"} color={"#50965bff"} />
        <BoxScroll text={"Text7"} color={"#9da21dff"} />
      </ScrollView>

      <Switchf/>
      <MyButton/>
      <ActivityIndicatorKullanimif />
      <Box2/>
       <ModalKullanimi />
      <Counter2 />
      <Foo3 />

      <Counter start={0} />
       <Counter start={100} />
        <Counter start={-78} />

      <Person name='İSO' surname='KGB' 
      color='#EAEAEA'></Person>
      <Person name='AZAT' surname='KGB' 
      color='#EAEAEA'></Person>

      <Person name= {'ALİ'} surname={'KGB'}
      color={'#94ac91ff'}></Person>
        <Foo2 />
        <Foo2 />
        <Foo2 />
        <Foo2/>
        
        <ArrowFunction/>
        */}

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
