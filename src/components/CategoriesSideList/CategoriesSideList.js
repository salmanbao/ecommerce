import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import {
    TabBarVertical,
    TabViewVertical,
    SceneMap
} from 'react-native-vertical-tab-view';
import { useStore } from 'react-redux';
import {
    MaterialIcons, Octicons, MaterialCommunityIcons,
    Entypo, FontAwesome, FontAwesome5, Feather, SimpleLineIcons,
    Fontisto, Ionicons
} from '@expo/vector-icons';
import SubCategories from './SubCategories';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

export default function CategoriesSideListComponent(props) {
    const store = useStore()
    const { products } = store.getState()
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        { key: 'popular_categories', title: 'Popular Categories', icon: 'star-o', type: 'fontawesome' }
        , ...products['parent_categories']
    ]);
    const [scenes, setScenes] = useState(Object.fromEntries(routes.map( category => [category.key,SubCategories])))

    useEffect(() => {
        return () => {
            setRoutes([])
            setScenes(null)
            setIndex(0)
        }
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

    const _renderScene = SceneMap(scenes);

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
        height: Dimensions.get('window').height,
        backgroundColor: '#f2f2f2'
    },
    tabbar: {
        backgroundColor: 'white',
        marginBottom:90
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