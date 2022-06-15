import React from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from "./theme";
import { Home } from '@screens/Home';
import { Routes } from './routes'

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync().catch(console.warn);

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="auto" />
      <Routes />
    </ThemeProvider>
  );
}