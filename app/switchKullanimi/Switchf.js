import { useState } from "react";
import { Switch, StyleSheet,View } from "react-native";

export default function Switchf() {
    let[status, setStatus] = useState(true);

    return (
        <View style={styles.container}>

           <Switch 
           value={status} 
           onValueChange={() => setStatus((prev) => !prev)}
           thumbColor={status ? "#52FF9A" : "#8ED2FF"}
           trackColor={{true: "#AFFFD1", false: "#C0E6FF"}}
           >

           </Switch>
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