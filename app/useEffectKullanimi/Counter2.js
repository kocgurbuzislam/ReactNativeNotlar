
import { View, Text, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

export const Counter2 = () => {
    const [even, setEven] = useState(0);
    const [odd, setOdd] = useState(1);

    useEffect(() => {
        console.log('Component Didmount oldu');
    }, []);

    useEffect(() => {
        return () => {
            console.log('Component WillUnmount oldu');
        }
    }, []);

    useEffect(() => {
        console.log('Component DidUpdate oldu (even)');
    }, [even]);

     useEffect(() => {
        console.log('Component DidUpdate oldu (odd)');
    }, [odd]);


    return (
        <View style={{
            width: 250,
            height: 250,
            backgroundColor: '#868686ff',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Text style={{ fontSize: 50 }}>Even: {even}</Text>
            <Button title="Increase" onPress={() => setEven((pre) => pre + 2)}></Button>

            <Text style={{ fontSize: 50 }}>Odd: {odd}</Text>
            <Button title="Increase" onPress={() => setOdd((pre) => pre + 2)}></Button>

        </View>
    );

}