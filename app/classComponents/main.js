import { StyleSheet, View } from 'react-native';
import Foo from './Foo';

export default function Main() {
    return (
        <View style={styles.container}>
            <Foo />
            <Foo />
            <Foo />
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




