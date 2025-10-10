export const Person = ({ name, surname, color }) => {
    return (
        <View style={{
            backgroundColor: color,
            width: 250,
            height: 100,
            borderRadius: 20,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                Name: {name}
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                Surname: {surname}
            </Text>
        </View>
    );
};

Person.defaultProps = {
    name: "Bilinmeyen",
    surname: "Kullanıcı",
    color: "#DDDDDD"
};
