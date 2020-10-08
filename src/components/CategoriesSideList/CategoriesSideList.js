import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import {
    TabBarVertical,
    TabViewVertical,
    SceneMap
} from 'react-native-vertical-tab-view';
import {
    MaterialIcons, Octicons, MaterialCommunityIcons,
    Entypo, FontAwesome, FontAwesome5, Feather, SimpleLineIcons,
    Fontisto, Ionicons
} from '@expo/vector-icons';
import Demo from '../../containers/Demo/demo'
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

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

class CategoriesSideListComponent extends React.Component {


    state = {
        index: 0,
        routes: [
            { key: 'popular_categories', title: 'Popular Categories', icon: 'star-o', type: 'fontawesome' },
            { key: 'cameras_and_photography', title: 'Cameras & Photography', icon: 'camera', type: 'feather' },
            { key: 'car_and_vehical_electronics', title: 'Car & Vehical Electronics', icon: 'ios-car', type: 'ionicons' },
            { key: 'classic_toys', title: 'Classic Toys', icon: 'toys', type: 'material' },
            { key: 'earphones_and_headphones', title: 'Earphones & Headphones', icon: 'headphones', type: 'feather' },
            { key: 'electronics', title: 'Electronics', icon: 'electronjs', type: 'fontisto' },
            { key: 'game_pad', title: 'Game Pad', icon: 'game-controller', type: 'simpleicons' },
            { key: 'health_care_products', title: 'Health Care Products', icon: 'heart', type: 'feather' },
            { key: 'home_appliances', title: 'Home Appliances', icon: 'home', type: 'octicons' },
            { key: 'iphone_and_accessories', title: 'Iphone & Accessories', icon: 'phone-iphone', type: 'material' },
            { key: 'laptops_and_computers', title: 'Laptops & Computers', icon: 'md-laptop', type: 'ionicons' },
            { key: 'mobile_phone_and_accessories', title: 'Mobile Phone & Accessories', icon: 'old-mobile', type: 'entypo' },
            { key: 'networking', title: 'Networking', icon: 'network-wired', type: 'font-awesome-5' },
            { key: 'pest_control', title: 'Pest Control', icon: 'bee', type: 'materialcommunity' },
            { key: 'play_station', title: 'Play Station', icon: 'playstation', type: 'font-awesome-5' },
            { key: 'smart_home', title: 'Smart Home', icon: 'home-assistant', type: 'materialcommunity' },
            { key: 'sunglasses', title: 'Sunglasses', icon: 'sunglasses', type: 'materialcommunity' },
            { key: 'tools', title: 'Tools', icon: 'tools', type: 'entypo' },
            { key: 'wifi_router', title: 'WIFI Router', icon: 'wifi', type: 'feather' },
        ],
    };

    getIconType(type, icon) {
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

    renderIcon = ({ route }) => (
        this.getIconType(route.type, route.icon)
    );

    _handleIndexChange = index =>
        this.setState({
            index,
        });

    _renderTabBar = props => (
        <TabBarVertical
            {...props}
            renderIcon={this.renderIcon}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            labelStyle={styles.label}
        />
    );

    _renderScene = SceneMap({
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
    render() {
        return (
            <TabViewVertical
                timingConfig={0}
                springConfig={{ mass: 0 }}
                style={[styles.container, this.props.style]}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        )
    }


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

export default CategoriesSideListComponent
