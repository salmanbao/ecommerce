import {
    HOME,
    DUMMY,
    COOKERS,
    HP_LAPTOP,
    DOOR_LOCK,
    HEADPHONES,
    DELL_LAPTOP,
    ACCESSORIES,
    GPS_TRACKER,
    WIFI_CAMERA,
    WIFI_ROUTER,
    CCTV_CAMERAS,
    POWER_SUPPLY,
    AUDIO_CABLES,
    SMART_WATCHES,
    HOME_FRAGRANCES,
    ITUNE_GIFT_CARD,
    DIGITAL_CAMERAS,
    CHARGER_AND_CABLES,
    MOUSE_AND_KEYBOARD,
    MULTIMEDIA_SPEAKER,
    WIRELESS_BLUETOOTH,
    CABLES_AND_ADAPTERS,
    SECURITY_AND_SAFETY,
    LIGHTS_AND_LIGHTING,
    GOOGLE_PLAY_GIFT_CARD,
    EXTERNAL_DATA_STORAGE,
    AUDIO_VISUAL_EXTENDERS,
    CONNECTOR_AND_CONVERTER,
    DESKTOP_AND_ACCESSORIES,
    PRINTER_SCANNER_PROJECTOR,
    CAR_ELECTRICAL_APPLIANCES,
    SMART_DEVICES_AND_SWITCHES,
    LAPTOP_CABLES_AND_ADAPTERS,
    LED_LIGHTS_AND_FLASHLIGHTS,
    MOBILE_CHARGING_AND_CABLES,
    WIRELESS_ROUTERS_AND_REPEATER,
    CLEANING_AND_OTHER_HOME_EQUIPMENT,
    ELECTRICAL_EQUIPMENT_AND_SUPPLIES,
    SMART_HOME_ASSISTANTS_AND_VOICE_CONTROL,

} from '../SubCategoriesList/images'

export default mapCategoriesToImages = (category) => {
    switch (category) {
        case 'dummy':
            return DUMMY;
        case 'accessores':
            return ACCESSORIES;
        case 'home':
            return HOME;
        case 'cookers':
            return COOKERS;
        case 'hp-laptop':
            return HP_LAPTOP;
        case 'door-lock':
            return DOOR_LOCK;
        case 'headphones':
            return HEADPHONES;
        case 'dell-laptop':
            return DELL_LAPTOP;
        case 'gps-tracker':
            return GPS_TRACKER;
        case 'wi-fi-camera':
            return WIFI_CAMERA;
        case 'wifi-router':
            return WIFI_ROUTER;
        case 'cctv-cameras':
            return CCTV_CAMERAS;
        case 'power-supply':
            return POWER_SUPPLY;
        case 'audio-cables':
            return AUDIO_CABLES;
        case 'smart-watches':
            return SMART_WATCHES;
        case 'home-fragrances':
            return HOME_FRAGRANCES;
        case 'itune-gift-card':
            return ITUNE_GIFT_CARD;
        case 'digital-cameras':
            return DIGITAL_CAMERAS;
        case 'chargers-cables':
            return CHARGER_AND_CABLES;
        case 'mouse-keyboards':
            return MOUSE_AND_KEYBOARD;
        case 'multimedia-speaker':
            return MULTIMEDIA_SPEAKER;
        case 'wireless-bluetooth':
            return WIRELESS_BLUETOOTH;
        case 'cables-adapters':
            return CABLES_AND_ADAPTERS;
        case 'security-and-safety':
            return SECURITY_AND_SAFETY;
        case 'lights-lighting':
            return LIGHTS_AND_LIGHTING;
        case 'google-play-gift-cards':
            return GOOGLE_PLAY_GIFT_CARD;
        case 'external-data-storage':
            return EXTERNAL_DATA_STORAGE;
        case 'audio-visual-extenders':
            return AUDIO_VISUAL_EXTENDERS;
        case 'connecter-converter':
            return CONNECTOR_AND_CONVERTER;
        case 'desktop-and-accessories':
            return DESKTOP_AND_ACCESSORIES;
        case 'printer-scanner-projector':
            return PRINTER_SCANNER_PROJECTOR;
        case 'car-electrical-appliances':
            return CAR_ELECTRICAL_APPLIANCES;
        case 'smart-devices-switches':
            return SMART_DEVICES_AND_SWITCHES;
        case 'laptops-computers':
            return LAPTOP_CABLES_AND_ADAPTERS;
        case 'led-lights-flashlights':
            return LED_LIGHTS_AND_FLASHLIGHTS;
        case 'mobile-charging-cables':
            return MOBILE_CHARGING_AND_CABLES;
        case 'wireless-routers-repeater':
            return WIRELESS_ROUTERS_AND_REPEATER;
        case 'cleaning-other-home-equipment':
            return CLEANING_AND_OTHER_HOME_EQUIPMENT;
        case 'electrical-equipment-supplies':
            return ELECTRICAL_EQUIPMENT_AND_SUPPLIES;
        case 'smart-home-assistants-voice-control':
            return SMART_HOME_ASSISTANTS_AND_VOICE_CONTROL;
    }
}
