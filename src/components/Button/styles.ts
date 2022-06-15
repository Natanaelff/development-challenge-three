import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: auto;

  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;

  background-color: ${({theme}) => theme.COLORS.blue};
  border-radius: ${RFValue(5)}px;

  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.FONTS.bold};

  color: ${({theme}) => theme.COLORS.white};
`;