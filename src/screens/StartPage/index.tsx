import React from 'react';
import {
  Container,
} from './styles';
import Lottie from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ButtonComponent } from '@components/Button';
import IconAnimated from '@assets/icons/iconAnimated.json';

import { rootParams } from "@utils/rootParams";

type rootStackParams = NativeStackNavigationProp<rootParams, 'Home'>;

export function StartPage() {
  const navigation = useNavigation<rootStackParams>();

  function handleHome() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Lottie source={IconAnimated} autoPlay loop />

      <ButtonComponent  
        title='Entrar'
        onPress={handleHome}
      />
    </Container>
  );
}