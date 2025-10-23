import { Text, View } from "react-native";

export default function BoxScroll({text,color}){
    return(
        <View style={{
            margin:3,
            width:300,
            height:300,
            backgroundColor:color,
            justifyContent:"center",
            alignItems:"center"

        }}>
            <Text style={{fontWeight:"bold", fontSize:25}}>
                {text}
            </Text>

        </View>

    );
}