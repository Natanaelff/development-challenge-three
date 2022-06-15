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

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};
  
  text-align: center;
  padding-top: ${RFValue(10)}px;
`;

export const ListSalved = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${RFValue(10)}px;

  margin-top: ${RFValue(15)}px;
`;

export const TextTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.bold};
`;

export const TextSubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};
`;