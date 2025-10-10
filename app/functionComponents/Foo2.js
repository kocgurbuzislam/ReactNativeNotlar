import { StyleSheet, Text, View } from 'react-native';

export default function Foo2() {
    return (
        <View style={styles.container}>
            <Text style={{ 
                fontWeight: 'bold', 
                fontSize: 30 }}>İSO KGB</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
