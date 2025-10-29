import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
export const Story = ({ image, name, seen }) => {
    return (
        <View style={{ alignItems: "center", margin: 1 }}>
            <View style={[{ width: 95, height: 95, 
            borderRadius: 50,
             borderWidth: 3, 
                justifyContent: "center", alignItems: "center" }, 
                seen ? Styless.seen : Styless.notseen]}>
                <Image style={{ width: 85, height: 85, 
                borderRadius: 45, borderWidth: 2 }}
                 source={{ uri: image }} />
            </View>
            <Text style={{fontWeight:"bold"}}>
                {name.substring(0,8)}
            </Text>
        </View>
    );
}
const Styless = StyleSheet.create({
    seen: {
        borderColor: "gray",
        borderStyle: "solid"
    },
    notseen: {
        borderColor: "blue",
        borderStyle: "dashed"
    }
})