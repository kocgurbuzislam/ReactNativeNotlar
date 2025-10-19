import { StyleSheet, View, Keyboard,TouchableWithoutFeedback,TextInput  } from 'react-native';



export default function Box2() {
    return (


        <TouchableWithoutFeedback style={styles.container} 
        onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <TextInput style={{
                    backgroundColor:"#EAEAEA",
                    width:250,
                    height:50,
                    borderRadius:10,
                    padding:10,
                    fontSize:18

                }} placeholder='Enter'></TextInput>
            </View>
                
        </TouchableWithoutFeedback >        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        width: 300,
        height: 300,
        borderRadius: 10,
        backgroundColor: '#E3E3E3',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
