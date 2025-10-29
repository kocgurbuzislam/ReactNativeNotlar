import { Text,View } from "react-native";
const Title = ({ name }) => {
    return (
        <Text
            style={{
                fontSize: 30,
                fontWeight: "bold",
                width: "90%",
                textAlign: "left",
                marginTop: 16
            }}>
            {name}
        </Text>
    );
}

const Item = ({name}) =>{
    return(
        <View style={{
             width: "300", 
             height:70,
             backgroundColor:"#E3E3E3", 
             borderRadius:15,
             marginVertical:8,
             paddingLeft:10,
             justifyContent:"center"}}>
                <Text style={{fontSize:20}}>{name}</Text>
        </View>
    );
}

export default Title;
export { Item };
