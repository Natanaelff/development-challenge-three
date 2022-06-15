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

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};
  
  text-align: center;
  padding-top: ${RFValue(10)}px;
`;

export const ViewSearch = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  margin-top: ${RFValue(25)}px;

  padding: 0 ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;;
  padding-top: ${RFValue(20)}px;

  border: 1px dotted ${({theme}) => theme.COLORS.white};
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const TitleSearch = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.bold};
`;

export const SubTitleSearch = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};

  padding-top: ${RFValue(5)}px;
`;

export const ButtonSearch = styled.View`
  width: 100%;
  height: auto;

  align-items: center;

  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};
`;

export const ListNull = styled.View`
  align-items: center;

  margin-top: ${RFValue(20)}px;
`