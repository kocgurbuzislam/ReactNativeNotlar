import { useState } from "react";
import { Button, View, Text } from "react-native";

export const Counter = ({start}) => {

    const [counter, setCounter] = useState(start);

    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 200,
            borderRadius: 30,
            marginBottom: 20,
            backgroundColor: "#DDDDDD",
        }}>
            <Text style={{ 
                fontWeight: "bold", 
                fontSize: 65 }}>{counter}</Text>
            <Button title="Increase" 
            onPress={() => setCounter(counter + 10)} />
            <View style={{ margin: 10 }}></View>
            <Button title="Decrease"
             onPress={() => setCounter(counter - 10)} />
        </View>
    );

}