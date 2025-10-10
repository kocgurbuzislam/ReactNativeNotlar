import React from 'react';
import { Text, View } from 'react-native';

class Foo extends React.Component {
    render() {
        return (
            <View 
            style={{
                 width: '100%', 
                 height: 50, 
                 borderRadius: 20,
                  backgroundColor: 'gray', 
                  margin: 5,
                  alignItems: 'center'}}>
                <Text 
                style={{ fontWeight: 'bold',
                 fontSize: 30 }}>İSO KGB</Text>
            </View>
        );
    }
}

export default Foo;