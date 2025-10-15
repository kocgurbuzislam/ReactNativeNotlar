import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import React, { useState } from 'react';

export default function ModalKullanimi() {

    const [visible, setVisible] = useState(false);
    return (
        <View style={styles.container}>

            <Button title='Modal' 
            onPress={() => setVisible(true)}></Button>

            <Modal visible={visible} animationType='fade'>
                <View style={styles.modalView}>

                    <View style={styles.modal}>
                        <Text style={{ 
                            fontSize: 30,
                             fontWeight: 'bold' }}>Modal</Text>
                        <Button title='Kapat' 
                        onPress={() => setVisible(false)}>

                        </Button>

                    </View>


                </View>
            </Modal>
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
