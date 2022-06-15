import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.gray};

  padding: ${RFValue(20)}px ${RFValue(10)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${RFValue(20)}px;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const ButtonModal = styled.TouchableOpacity`
  width: auto;
  height: auto;

  padding: ${RFValue(6)}px ${RFValue(6)}px;

  border: 1px solid ${({theme}) => theme.COLORS.white};
  border-radius: ${RFValue(20)}px;
`;

export const Content = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.bold};

  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};

  padding-top: ${RFValue(15)}px;
`;

export const View = styled.View``;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};

  padding-top: ${RFValue(5)}px;
  padding-left: ${RFValue(10)}px;
`;

export const TextMiss = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};
`;

export const ViewPreparation = styled.View`
  margin-top: ${RFValue(25)}px;
`;
