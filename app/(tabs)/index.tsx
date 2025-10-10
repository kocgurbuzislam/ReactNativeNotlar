import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ArrowFunction } from '../functionComponents/ArrowFunction';
import { Person } from '../props/Person';

export default function HomeScreen() {
  return (
    <View style={styles.container}>


      <Person name='İSO' surname='KGB' 
      color='#EAEAEA'></Person>
      <Person name='AZAT' surname='KGB' 
      color='#EAEAEA'></Person>

      <Person name= {'ALİ'} surname={'KGB'}
      color={'#94ac91ff'}></Person>





      {/*
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
