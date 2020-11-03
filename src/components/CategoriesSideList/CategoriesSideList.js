import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import {
    TabBarVertical,
    TabViewVertical,
    SceneMap
} from 'react-native-vertical-tab-view';
import { useDispatch } from 'react-redux';
import {
    MaterialIcons, Octicons, MaterialCommunityIcons,
    Entypo, FontAwesome, FontAwesome5, Feather, SimpleLineIcons,
    Fontisto, Ionicons
} from '@expo/vector-icons';
import PopularCategories from './../SubCategoriesList/popularCategories';
import CameraAndPhotography from '../SubCategoriesList/CameraAndPhotography';
import CarAndVehical from './../SubCategoriesList/CarAndVehical';
import ClassicToys from './../SubCategoriesList/ClassicToys';
import EarAndHeadPhones from './../SubCategoriesList/EarAndHeadPhones';
import Electronics from './../SubCategoriesList/Electronics';
import GamePad from './../SubCategoriesList/GamePad';
import HealthCare from './../SubCategoriesList/HealthCare';
import HomeAppliances from './../SubCategoriesList/HomeAppliances';
import IphoneAccessories from './../SubCategoriesList/IphoneAccessories';
import LaptopAndComputer from './../SubCategoriesList/LaptopAndComputer';
import Networking from './../SubCategoriesList/Networking';
import PestControl from './../SubCategoriesList/PestControl';
import PlayStation from './../SubCategoriesList/PlayStation';
import SmartHome from './../SubCategoriesList/SmartHome';
import SunGlasses from '../SubCategoriesList/SunGlasses';
import Tools from './../SubCategoriesList/Tools';
import WifiRouter from './../SubCategoriesList/WifiRouter';
import MobileAccessories from './../SubCategoriesList/MobileAccessories';
import createStore from '../../stores';
import ProductActions from '../../stores/Products/Actions';



const { store } = createStore()

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

export default function CategoriesSideListComponent(props) {
    const dispatch = useDispatch()
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        { key: 'popular_categories', title: 'Popular Categories', icon: 'star-o', type: 'fontawesome' }
    ]);

    useEffect(() => {
        dispatch(ProductActions.getParentCategories())
        let { products } = store.getState()
        setRoutes([...routes, ...products['parent_categories']])
    }, [])

    const getIconType = (type, icon) => {
        switch (type) {
            case 'fontawesome':
                return <FontAwesome name={icon} size={24} color='#333' />
            case 'font-awesome-5':
                return <FontAwesome5 name={icon} size={24} color='#333' />
            case 'ionicons':
                return <Ionicons name={icon} size={24} color='#333' />
            case 'fontisto':
                return <Fontisto name={icon} size={24} color='#333' />
            case 'materialcommunity':
                return <MaterialCommunityIcons name={icon} size={24} color='#333' />
            case 'material':
                return <MaterialIcons name={icon} size={24} color='#333' />
            case 'feather':
                return <Feather name={icon} size={24} color='#333' />
            case 'octicons':
                return <Octicons name={icon} size={24} color='#333' />
            case 'entypo':
                return <Entypo name={icon} size={24} color='#333' />
            case 'simpleicons':
                return <SimpleLineIcons name={icon} size={24} color='#333' />
        }
    }

    const renderIcon = ({ route }) => (
        getIconType(route.type, route.icon)
    );

    const _handleIndexChange = index => setIndex(index)

    const _renderTabBar = props => (
        <TabBarVertical
            {...props}
            renderIcon={renderIcon}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            labelStyle={styles.label}
        />
    );

    const _renderScene = SceneMap({
        mobile_phone_and_accessories: MobileAccessories,
        cameras_and_photography: CameraAndPhotography,
        car_and_vehical_electronics: CarAndVehical,
        earphones_and_headphones: EarAndHeadPhones,
        iphone_and_accessories: IphoneAccessories,
        laptops_and_computers: LaptopAndComputer,
        popular_categories: PopularCategories,
        health_care_products: HealthCare,
        home_appliances: HomeAppliances,
        classic_toys: ClassicToys,
        pest_control: PestControl,
        play_station: PlayStation,
        electronics: Electronics,
        wifi_router: WifiRouter,
        networking: Networking,
        sunglasses: SunGlasses,
        smart_home: SmartHome,
        game_pad: GamePad,
        tools: Tools,
    });

    return (
        <TabViewVertical
            timingConfig={0}
            springConfig={{ mass: 0 }}
            style={[styles.container, props.style]}
            navigationState={{ index, routes }}
            renderScene={_renderScene}
            renderTabBar={_renderTabBar}
            onIndexChange={_handleIndexChange}
            initialLayout={initialLayout}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    tabbar: {
        backgroundColor: '#f2f2f2',
    },
    tab: {
        backgroundColor: 'white',
        width: 90,
        height: 80,
    },
    indicator: {
        backgroundColor: '#f2f2f2',
        left: 2,
        height: 80
    },
    label: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '900',
        color: '#333',
        fontWeight: '400',
        backgroundColor: 'transparent'
    },
});