import React from "react";
import { useWindowDimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';

export default function MatchingComponent() {
    const [country, setCountry] = React.useState('best_match')
    React.useEffect(() => {
        return () => {
            setCountry('')
        }
    })
    return (
            <DropDownPicker
                items={[
                    { label: 'Best Match', value: 'best_match', selected: true },
                    { label: 'Date Added (New to Old)', value: 'new_to_old' },
                    { label: 'Price (High to Low)', value: 'high_to_low' },
                    { label: 'Price (Low to High)', value: 'low_to_high' },
                ]}
                containerStyle={{ height: 40, width: 110 }}
                selectedLabelStyle={{
                    color: '#f56a79',
                }}
                zIndex={5}
                customTickIcon={() => <Feather name="check" size={15} color="#f56a79" />}
                activeLabelStyle={{ color: '#f56a79' }}
                style={{ backgroundColor: 'white', borderColor: 'white' }}
                itemStyle={{
                    justifyContent: 'flex-start'

                }}
                dropDownStyle={{ backgroundColor: '#fafafa', width: useWindowDimensions().width }}
                onChangeItem={item => {setCountry(item.value) }}
            />
    );
}
