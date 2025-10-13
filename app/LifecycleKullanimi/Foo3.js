import { Component } from "react";
import { Button, View, Text } from "react-native";

export class Foo3 extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    };

    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
    return (
        <View style={{
            height:200, 
            width:200, 
            backgroundColor:"#177710ff",
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center",
            }}>

                <Text style={{fontSize:65, fontWeight:"bold", color:"white"}}> {this.state.counter} </Text>
                <Button title="Increase" 
                onPress={() => this.setState({counter: this.state.counter + 1})} />
                <View style={{margin:10}}></View>
        </View>
    );
    
    }

}