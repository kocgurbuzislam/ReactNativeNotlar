import { StyleSheet, View,Text,FlatList } from "react-native";
const data = Array(20)
    .fill(null)
    .map((_, i) => ({
        number: i,
    }));

export default function FlatListf() {
    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            //numColumns={2}
            keyExtractor={(item) => item.number}
            renderItem={({item}) => <Box number={item.number}/>}
            />
        </View>
    );
}
const Box = ({number}) =>{
    return(
        <View style={{width:50,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25,
        backgroundColor:"yellow"}}>
            <Text style={{fontSize:20}}>{number}</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"

    }

});