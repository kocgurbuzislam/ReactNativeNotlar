import { View, TouchableOpacity } from "react-native";

export const Box = () => {
    return (

        <TouchableOpacity
            onPress={() => {
                alert('Box Tıklandı');
            }}
            onLongPress={() => {
                alert('Box uzun tıklandı')
            }}

            onPressOut={() => {
                alert('press out')
            }}

        >
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: '#14917eff',
                borderRadius: 15,
            }}>
            </View>
        </TouchableOpacity>
    );
}