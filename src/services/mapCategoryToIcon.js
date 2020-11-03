
export default mapCategoryToIcon = (category) => {
    switch (category) {
        case 'popular_categories':
            return { key: 'popular_categories', title: 'Popular Categories', icon: 'star-o', type: 'fontawesome' }
        case 'cameras-photography':
            return { key: 'cameras_and_photography', title: 'Cameras & Photography', icon: 'camera', type: 'feather' };
        case 'car-vehicle-electronics':
            return { key: 'car_and_vehical_electronics', title: 'Car & Vehical Electronics', icon: 'ios-car', type: 'ionicons' };
        case 'classic-toys':
            return { key: 'classic_toys', title: 'Classic Toys', icon: 'toys', type: 'material' };
        case 'earphones-headphones':
            return { key: 'earphones_and_headphones', title: 'Earphones & Headphones', icon: 'headphones', type: 'feather' };
        case 'electronics':
            return { key: 'electronics', title: 'Electronics', icon: 'electronjs', type: 'fontisto' };
        case 'game-pad':
            return { key: 'game_pad', title: 'Game Pad', icon: 'game-controller', type: 'simpleicons' };
        case 'health-care-products':
            return { key: 'health_care_products', title: 'Health Care Products', icon: 'heart', type: 'feather' };
        case 'home-appliances':
            return { key: 'home_appliances', title: 'Home Appliances', icon: 'home', type: 'octicons' };
        case 'iphone-and-accessries':
            return { key: 'iphone_and_accessories', title: 'Iphone & Accessories', icon: 'phone-iphone', type: 'material' };
        case 'laptops-computers':
            return { key: 'laptops_and_computers', title: 'Laptops & Computers', icon: 'md-laptop', type: 'ionicons' };
        case 'mobile-phone-accessories':
            return { key: 'mobile_phone_and_accessories', title: 'Mobile Phone & Accessories', icon: 'old-mobile', type: 'entypo' };
        case 'networking':
            return { key: 'networking', title: 'Networking', icon: 'network-wired', type: 'font-awesome-5' };
        case 'pest-control':
            return { key: 'pest_control', title: 'Pest Control', icon: 'bee', type: 'materialcommunity' };
        case 'play-station':
            return { key: 'play_station', title: 'Play Station', icon: 'playstation', type: 'font-awesome-5' };
        case 'smart-home':
            return { key: 'smart_home', title: 'Smart Home', icon: 'home-assistant', type: 'materialcommunity' };
        case 'sunglasses-men-accessories':
            return { key: 'sunglasses', title: 'Sunglasses', icon: 'sunglasses', type: 'materialcommunity' };
        case 'tools':
            return { key: 'tools', title: 'Tools', icon: 'tools', type: 'entypo' };
        case 'wifi-router':
            return { key: 'wifi_router', title: 'WIFI Router', icon: 'wifi', type: 'feather' };
    }
}
