import { View } from "react-native";
import { faker, Faker } from "@faker-js/faker";
import { FlatList } from "react-native";
import { Message } from '../flatListKullanimi/Message';
const DATA = Array(20).fill(null).map(e => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    message: faker.lorem.sentence(),
    news: faker.number.int() % 5,
    online: faker.datatype.boolean(),
}))
export const MessageList = () => {
    return (
        <View style={{ width: "90%", padding:10 }}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Message
                        name={item.name}
                        avatar={item.avatar}
                        message={item.message}
                        news={item.news}
                        online={item.online}
                    />
                )}
            >
            </FlatList>
        </View>
    );
}