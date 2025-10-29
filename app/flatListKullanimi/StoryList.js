import { View } from "react-native";
import { faker } from "@faker-js/faker";
import { FlatList } from "react-native";
import { Story } from '../flatListKullanimi/Story';

const DATA = Array(20).fill(null).map((e) => ({
    id: faker.string.uuid(),
    avatar: faker.image.urlLoremFlickr(),
    name: faker.internet.username(),
    seen: faker.datatype.boolean()
    
}))
export const StoryList = () => {

    return (
        <View>
            <FlatList 
            data={DATA} 
            tyle={{ height: 120 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            keyExtractor={(item) =>item.id} 
            renderItem={({item}) => <Story image={item.avatar} name={item.name} seen={item.seen} />}>
            </FlatList>

        </View>
    );
}