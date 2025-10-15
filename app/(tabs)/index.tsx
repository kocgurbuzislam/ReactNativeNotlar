import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ArrowFunction } from '../functionComponents/ArrowFunction';
import { Person } from '../props/Person';
import { Counter } from '../stateKullanimi/Counter';
import { Foo3 } from '../LifecycleKullanimi/Foo3';
import { Counter2 } from '../useEffectKullanimi/Counter2';
import ModalKullanimi from '../modalKullanimi/ModalKullanimi';
import {Box} from '../touchableOpacityKullanimi/Box';
export default function HomeScreen() {
  return (
    <View style={styles.container}>


      <Box/>



      {/*
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
