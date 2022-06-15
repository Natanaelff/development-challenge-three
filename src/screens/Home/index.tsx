import React, { useState, useRef } from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Container,
  Content,
  Text,
  AddView,
  ButtonAdd,
  TextAdd,
  TextInputName,
  ViewFlexInput,
  ViewInputName,
  TextInputUn,
  ViewInputUn,
  ViewSelectFlex,
  ButtonRemove,
  ButtonUn,
  TextButtonUn,
  ButtonSalve,
  TextSalve,
} from './styles';

import { Icon } from "@components/Icon";
import { ButtonComponent } from "@components/Button";
import theme from "@theme/index";
import { rootParams } from "@utils/rootParams";

type rootStackParams = NativeStackNavigationProp<rootParams, 'SearchRecipe'>;

export function Home() {
  const navigation = useNavigation<rootStackParams>();
  const [unity, setUnity] = useState(true);

  const [textValue, setTextValue] = useState('');
  const [unValue, setUnValue] = useState('');
  const [numberInputs, setNumberInputs] = useState(1);

  const refInputs = useRef<string[]>([textValue]);
  const refInputsUn = useRef<string[]>([unValue]);

  function handleSearchRecipe() {
    if (textValue === '') {
      return Alert.alert('Digite o ingrediente')
    }

    if (unity === true) {
      if (unValue == '') {
        return Alert.alert('Digite a unidadede')
      }
    }

    if (unity === false) {
      if (unValue == '') {
        return Alert.alert('Digite a grama')
      }
    }

    navigation.navigate('SearchRecipe', { details: `${unValue} ${textValue}` })
  }

  function setInputValue(index: number, value: string) {
    const inputs = refInputs.current;
    inputs[index] = value;

    setTextValue(value);
  }

  function setInputValueUn(index: number, value: string) {
    const inputs = refInputsUn.current;
    inputs[index] = value;

    setUnValue(value);
  }

  
  function handleAddInput() {
    refInputs.current.push('');

    setNumberInputs(value => value + 1);
  }

  function handleRemoveInput(i: number) {
    refInputs.current.slice(i, 1)[0];
    
    setNumberInputs(value => value - 1);
  }

  const inputs: JSX.Element[] = [];
  for (let i = 0; i < numberInputs; i ++)
  {
    inputs.push(
      <>
        <ViewFlexInput key={i}>
          <ViewInputName>
            <TextInputName
              placeholder="ingrediente"
              placeholderTextColor={theme.COLORS.black}
              onChangeText={value => setInputValue(i, value)}
              value={refInputs.current[i]}
              autoCapitalize="none"
            />
          </ViewInputName>

          <ViewSelectFlex>
            {
              unity === true ? (
                <ViewInputUn>
                  <TextInputUn
                    placeholder="Unidade"
                    onChangeText={value => setInputValueUn(i, value)}
                    value={refInputsUn.current[i]}
                    placeholderTextColor={theme.COLORS.black}
                    autoCapitalize="none"
                  />
                </ViewInputUn>
              ) : (
                <ViewInputUn>
                  <TextInputUn
                    placeholder="Gramas"
                    onChangeText={value => setInputValueUn(i, value)}
                    value={refInputsUn.current[i]}
                    placeholderTextColor={theme.COLORS.black}
                    autoCapitalize="none"
                  />
                </ViewInputUn>
              )
            }

            {
              numberInputs >= 1 && (
                <ButtonRemove onPress={() => handleRemoveInput(i)}>
                  <Icon name="cross" size={RFValue(15)} color={theme.COLORS.white} />
                </ButtonRemove>
              )
            }
          </ViewSelectFlex>
        </ViewFlexInput>
      </>
    )
  }

  return (
    <Container>
      <Content>
        <Text>Bem-Vindo ao novo app de receitas</Text>

        <AddView>
          <TextAdd>Adicionar ingredientes</TextAdd>

          <ButtonAdd onPress={handleAddInput}>
            <Icon name="plus" size={RFValue(15)} color={theme.COLORS.white} />
          </ButtonAdd>
        </AddView>

        {
          numberInputs >= 1 && (
            <>
              {
                unity === true ? (
                  <ButtonUn onPress={() => setUnity(!unity)}>
                    <TextButtonUn>Mudar para gramas</TextButtonUn>
                  </ButtonUn>
                ) : (
                  <ButtonUn onPress={() => setUnity(!unity)}>
                    <TextButtonUn>Mudar para unidades</TextButtonUn>
                  </ButtonUn>
                )
              }
            </>
          )
        }

        {inputs}
      </Content>
      
      <ButtonComponent
        title="Pesquisar"
        onPress={handleSearchRecipe}
      />
    </Container>
  )
}