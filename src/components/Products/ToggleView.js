import React from "react";
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-elements';

export default function ToggleViewComponent() {

    return (
        <View style={{ marginLeft: '40%' }}>
            <Button
                type='clear'
                onPress={() => { console.log('toggle view button') }}
                buttonStyle={{ height: 30, marginTop: 4 }}
                icon={
                    <MaterialIcons name={"list"} size={20} color="#f56a79"  />
                }
            />
        </View>
    );
}
