import React from "react";
import { TextStyle } from 'react-native';
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const IcoMoon = createIconSetFromIcoMoon(
  require('@assets/icons/selection'),
  'IcoMoon',
  'icomoon.ttf'
);

export type IconName = 
  | 'arrow-up2'
  | 'arrow-right2'
  | 'arrow-down2'
  | 'arrow-left2'
  | 'cog'
  | 'home'
  | 'plus'
  | 'cross';

type IconProps = {
  name: IconName;
  color: string;
  size: number;
  style?: TextStyle;
};

export function Icon({ color, name, size, style }: IconProps) {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('@assets/icons/icomoon.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <IcoMoon name={name} size={size} color={color} style={style} />;
}