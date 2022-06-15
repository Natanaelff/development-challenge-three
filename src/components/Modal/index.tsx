import React, { useState, useRef } from "react";
import Modal from 'react-native-modal';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  ViewModal,
  Header,
  ButtonGoBack,
  AddView,
  ButtonAdd,
  Title,
  TextInputName,
  TextInputUn,
  ViewFlexInput,
  ViewInputName,
  ViewInputUn,
  ViewSelectFlex,
  ButtonRemove,
  ButtonUn,
  TextButtonUn,
  ViewButton,
} from './styles';

import { Icon } from "@components/Icon";
import theme from "@theme/index";
import { ButtonComponent } from "@components/Button";
import { rootParams } from "@utils/rootParams";

type ModalProps = {
  visible: boolean;
  onPress: () => void
  onPressButton: () => void;
}

type rootStackParams = NativeStackNavigationProp<rootParams, 'SearchRecipeDetails'>;

export function ModalComponent({visible, onPress, onPressButton}: ModalProps) {
  const navigation = useNavigation<rootStackParams>();
  const [unity, setUnity] = useState(true);

  const [textValue, setTextValue] = useState('');
  const [unValue, setUnValue] = useState('');
  const [numberInputs, setNumberInputs] = useState(1);

  const refInputs = useRef<string[]>([textValue]);
  const refInputsUn = useRef<string[]>([unValue]);

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

  function handleSalved() {
    navigation.navigate('SalvedList', { details: `${unValue} ${textValue}` })
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
                    keyboardType="decimal-pad"
                  />
                </ViewInputUn>
              ) : (
                <ViewInputUn>
                  <TextInputUn
                    placeholder="Gramas"
                    onChangeText={value => setInputValueUn(i, value)}
                    value={refInputsUn.current[i]}
                    placeholderTextColor={theme.COLORS.black}
                    keyboardType="decimal-pad"
                  />
                </ViewInputUn>
              )
            }

            {
              numberInputs >= 1 && (
                <ButtonRemove onPress={() => handleRemoveInput(i)}>
                  <Icon name="cross" size={RFValue(18)} color={theme.COLORS.white} />
                </ButtonRemove>
              )
            }
          </ViewSelectFlex>
        </ViewFlexInput>
      </>
    )
  }

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
    >
      <ViewModal>
        <Header>
          <ButtonGoBack onPress={onPress}>
            <Icon name="cross" size={RFValue(16)} color={theme.COLORS.black} />
          </ButtonGoBack>
        </Header>

        <AddView>
          <Title>Adicionar ingredientes</Title>

          <ButtonAdd onPress={handleAddInput}>
            <Icon name="plus" size={RFValue(12)} color={theme.COLORS.white} />
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

        <ViewButton>
          <ButtonComponent 
            title="Adicinar"
            onPress={handleSalved}
          />
        </ViewButton>
      </ViewModal>
    </Modal>
  );
}