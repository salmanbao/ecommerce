import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Button } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';
function getIconType(type, options) {
    switch (type) {
        case 'font-awesome-5':
            return <FontAwesomeIcon
                type={options.type}
                reverse={true}
                name={options.name}
                size={15}
                color="white"
            />
        case 'evilicon':
            return <EvilIcon
                type={options.type}
                reverse={true}
                name={options.name}
                size={15}
                color="white"
            />
        case 'fontisto':
            return <Fontisto
                type={options.type}
                reverse={true}
                name={options.name}
                size={15}
                color="white"
            />
    }
}


export default function IconMenuComponent() {
    const navigation = useNavigation();
    const [items, setItems] = React.useState([
        { id: 1, name: 'bars', code: '#f56a79', type: 'font-awesome-5', text: 'Categories', route: 'all_categories' },
        // { id: 2, name: 'shopping-sale', code: '#ffefa0', type: 'fontisto', text: 'Coins & Coupons', route: 'all_categories' },
        // { id: 3, name: 'gift', code: '#99f3bd', type: 'font-awesome-5', text: 'Freebies', route: 'all_categories' },
        // { id: 4, name: 'tag', code: '#ff4b5c', type: 'font-awesome-5', text: 'Slash it', route: 'all_categories' },
        { id: 5, name: 'money-bill-wave', code: '#f0a500', type: 'font-awesome-5', text: 'Coupons Pals', route: 'all_categories' },
        // { id: 6, name: 'money-bill-alt', code: '#848ccf', type: 'font-awesome-5', text: 'Get $20', route: 'all_categories' },
        { id: 7, name: 'meteor', code: '#93b5e1', type: 'font-awesome-5', text: 'Featured Brands', route: 'all_categories' },
        { id: 8, name: 'shopping-bag', code: '#3282b8', type: 'font-awesome-5', text: 'Top Selection', route: 'all_categories' },
        { id: 9, name: 'birthday-cake', code: '#a8df65', type: 'font-awesome-5', text: 'New Arrivals', route: 'all_categories' },
        // { id: 10, name: 'shopping-store', code: '#0e9aa7', type: 'fontisto', text: 'Store', route: 'all_categories' }
    ]);

    return (
        <View>
            <FlatGrid
                itemDimension={50}
                data={items}
                style={styles.gridView}
                spacing={15}
                listKey='icons'
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.icon} >
                        <Button
                            type='solid'
                            onPress={() => {navigation.navigate(item.route) }}
                            buttonStyle={{ height: 40, width: 40, borderRadius: 50, backgroundColor: item.code }}
                            icon={
                                getIconType(item.type, item)
                            }
                        />
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 0
    },
    icon: {
        flex: 1,
        textAlign: 'justify',
    },
    text: {
        fontSize: 10,
        marginVertical: 5
    }
});