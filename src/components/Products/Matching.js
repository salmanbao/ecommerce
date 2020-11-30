import React from "react";
import { connect, useDispatch } from 'react-redux';
import { useWindowDimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import ProductActions from '../../stores/Products/Actions';

function MatchingComponent() {
    const dispatch = useDispatch()
    const [country, setCountry] = React.useState('best_match')
    React.useEffect(() => {
        return () => {
            setCountry('')
        }
    })

    const filterBy = (item) => {
        console.log(item)
        dispatch(ProductActions.getProductsByCategory(props.categoryId, page))
    }

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
            onChangeItem={item => { filterBy(item.value) }}
        />
    );
}

function mapStateToProps({ products }) {
    const { productsByCategory } = products;
    const { categoryId } = products;
    return {
        products: productsByCategory[categoryId] || []
    };
}

export default connect(mapStateToProps, null)(MatchingComponent)
