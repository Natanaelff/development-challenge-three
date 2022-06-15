import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  Header,
  ButtonGoBack,
  Content,
  Title,
  SubTitle,
  View,
  Text,
  ViewPreparation,
  TextMiss,
  ButtonModal,
} from './styles';

import { Icon } from "@components/Icon";
import theme from "@theme/index";
import { ModalComponent } from '@components/Modal';

export function SearchRecipeDetails() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { details } = route.params;

  const [visible, setVisible] = useState(false);

  function onOpen() {
    setVisible(true);
  }

  function onClose() {
    setVisible(false);
  }
 
  function handleGoBck() {
    navigation.goBack();
  }

  function handleAlert() {
    Alert.alert('salvado com sucesso!')
  }

  return (
    <Container>
      <Header>
        <ButtonGoBack onPress={handleGoBck}>
          <Icon name="arrow-left2" size={RFValue(20)} color={theme.COLORS.white} />
        </ButtonGoBack>

        <ButtonModal onPress={onOpen}>
          <TextMiss>Faltou ingrediente?</TextMiss>
        </ButtonModal>
      </Header>

      <Content>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: RFValue(40) }}>
          <Title>{details?.title}</Title>

          <SubTitle>{details?.titleMass}</SubTitle>
          {
            details?.mass.map((item: any, index: any) => (
              <View key={index}>
                <Text>- {item}</Text>
              </View>
            ))
          }

          {
            details?.roof > '' && (
              <>
                <SubTitle>{details?.titleRoof}</SubTitle>
                {
                  details?.roof.map((item: any, index: any) => (
                    <View key={index}>
                      <Text>- {item}</Text>
                    </View>
                  ))
                }
              </>
            )
          }

          <ViewPreparation>
            <SubTitle>Modo de preparo</SubTitle>
            {
              details?.preparation.map((item: any, index: any) => (
                <View key={index}>
                  <Text>- {item}</Text>
                </View>
              ))
            }
          </ViewPreparation>

          {
            details?.preparation_roof > '' && (
              <>
                <ViewPreparation>
                  <SubTitle>Modo de preparo da cobertura</SubTitle>
                  {
                    details?.preparation_roof.map((item: any, index: any) => (
                      <View key={index}>
                        <Text>- {item}</Text>
                      </View>
                    ))
                  }
                </ViewPreparation>
              </>
            )
          }
        </ScrollView>
      </Content>

      <ModalComponent 
        visible={visible}
        onPress={onClose}
        onPressButton={() => {
          onClose();
          handleAlert();
        }}
      />
    </Container>
  )
}