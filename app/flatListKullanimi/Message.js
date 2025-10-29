import { View, Image, Text } from "react-native";
export const Message = (props) => {
    const { name, avatar, news, message, online } = props
    return (
        <View style={{
            width: "100%",
            height: 80,
            flexDirection: "row",
            margin: 2,
            padding: 2,
            borderBottomWidth:1,
            borderBottomColor:"#E0E0E0"
        }}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: 70, height: 70, borderRadius: 40, 
                borderWidth: 2,
                borderColor: "#4732B1" }}
                    source={{ uri: avatar }}
                />
                {online &&
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        position: "absolute",
                        bottom: 12,
                        right: 5,
                        backgroundColor: "#1ECB83"
                    }}></View>
                }
            </View>
            <View style={{ flex: 3, justifyContent: "center", paddingLeft: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
                <Text style={{ fontSize: 13, color: "gray" }} >{message}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {news > 1 &&
                    <View style={{ backgroundColor: "#27e10aff", width: 30, height: 30, 
                    borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 12, color: "white", fontWeight: "bold" }}>{news}</Text>
                    </View>
                }
            </View>
        </View>
    );
}