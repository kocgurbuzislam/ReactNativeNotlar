import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, ActivityIndicator } from "react-native";

export const MyButton = () => {
    const [pressed, setPressed] = useState(false);
    return (
        <View style={{
            width: 100,
            height: 40,
            backgroundColor: "#F6DA4B",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center"
        }}>
            {
                pressed &&
                <ActivityIndicator size={"small"} color="black">
                </ActivityIndicator>
            }

            {
                !pressed && (
                    <TouchableOpacity onPress={() => setPressed((p) => !p)}>
                        <View style={{ 
                            justifyContent: "center", 
                            alignItems: "center", flexDirection: "row" }}>
                            <AntDesign 
                            name="star" 
                            size={20} color="black"></AntDesign>
                            <Text>Press</Text>
                        </View>
                    </TouchableOpacity>
                )
            }

        </View>
    );
}