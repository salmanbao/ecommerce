import React from "react";

import {
  MaterialIcons, Octicons, MaterialCommunityIcons,
  Entypo, FontAwesome, FontAwesome5, Feather, SimpleLineIcons,
  Fontisto, Ionicons, EvilIcons
} from "@expo/vector-icons";
import { Colors } from "../theme";


const getIconType = (type, icon,focused) => {
  switch (type) {
    case 'fontawesome':
      return <FontAwesome name={icon} style={{ marginBottom: -6 }} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'font-awesome-5':
      return <FontAwesome5 name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'ionicons':
      return <Ionicons name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'fontisto':
      return <Fontisto name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'materialcommunity':
      return <MaterialCommunityIcons name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'material':
      return <MaterialIcons name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'feather':
      return <Feather name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'octicons':
      return <Octicons name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'entypo':
      return <Entypo name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'simpleicons':
      return <SimpleLineIcons name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
    case 'evilicons':
      return <EvilIcons name={icon} size={26} color={focused ? Colors.green50 : Colors.grey40} />
  }
}

export default function TabBarIcon(props) {
  return (
    getIconType(props.type, props.name,props.focused)
  );
}
