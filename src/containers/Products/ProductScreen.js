import React from 'react'
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import AllProductsByCategory from '../../components/Products/AllProductsByCategory'
import CustomDrawerContent from './AttributesDrawer';

const Drawer = createDrawerNavigator();

const Products = () => {
    return (
        <Drawer.Navigator initialRouteName="categories" headerMode="none" drawerPosition={"right"} Options={{ title: 'Hack' }} drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="categories" component={AllProductsByCategory} />
        </Drawer.Navigator>
    )
}

export default Products;

