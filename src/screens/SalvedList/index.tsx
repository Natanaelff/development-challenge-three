import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Container,
  Header,
  ButtonGoBack,
  Title,
  ListSalved,
  TextSubTitle,
} from './styles';

import { Icon } from "@components/Icon";
import theme from "@theme/index";

import { rootParams } from "@utils/rootParams";

type rootStackParams = NativeStackNavigationProp<rootParams, 'Home'>;

export function SalvedList() {
  const navigation = useNavigation<rootStackParams>();
  const route = useRoute<any>();
  const { details } = route?.params || null;

  function handleGoBck() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Header>
        <ButtonGoBack onPress={handleGoBck}>
          <Icon name="arrow-left2" size={RFValue(20)} color={theme.COLORS.white} />
        </ButtonGoBack>
      </Header>

      <Title>Lista de items salvos</Title>

      <ListSalved>
        <TextSubTitle>{details}</TextSubTitle>
      </ListSalved>
    </Container>
  );
}