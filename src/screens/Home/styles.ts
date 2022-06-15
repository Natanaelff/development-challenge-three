import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.gray};

  padding: ${RFValue(20)}px ${RFValue(20)}px;

  justify-content: space-between;
`;

export const Content = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.bold};
  
  text-align: center;
`;

export const AddView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(35)}px;
`;

export const TextAdd = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.COLORS.white};
  font-family: ${({theme}) => theme.FONTS.regular};
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;

  border-radius: ${RFValue(35)}px;
  background-color: ${({theme}) => theme.COLORS.blue};

  align-items: center;
  justify-content: center;
`;

export const ViewFlexInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(15)}px;
`;

export const ViewInputName = styled.View`
  width: ${RFValue(170)}px;
  height: auto;
  
  padding-top: ${RFValue(5)}px;
  padding-bottom: ${RFValue(5)}px;

  background-color: ${({theme}) => theme.COLORS.white};
  border-radius: ${RFValue(5)}px;
`;

export const TextInputName = styled.TextInput`
  width: ${RFValue(160)}px;

  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.FONTS.regular};

  color: ${({theme}) => theme.COLORS.black};
  padding-left: ${RFValue(5)}px;
`;

export const ViewInputUn = styled.View`
  width: ${RFValue(70)}px;
  height: auto;
  
  padding-top: ${RFValue(5)}px;
  padding-bottom: ${RFValue(5)}px;

  background-color: ${({theme}) => theme.COLORS.white};
  border-top-left-radius: ${RFValue(5)}px;
  border-bottom-left-radius: ${RFValue(5)}px;
`;

export const ViewSelectFlex = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextInputUn = styled.TextInput`
  width: ${RFValue(100)}px;

  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.FONTS.regular};

  color: ${({theme}) => theme.COLORS.black};
  padding-left: ${RFValue(5)}px;
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: auto;
  
  padding-top: ${RFValue(7)}px;
  padding-bottom: ${RFValue(7)}px;

  background-color: ${({theme}) => theme.COLORS.blue};
  border-top-right-radius: ${RFValue(5)}px;
  border-bottom-right-radius: ${RFValue(5)}px;

  align-items: center;
  justify-content: center;

  margin-left: ${RFValue(2)}px;
`;

export const ButtonUn = styled.TouchableOpacity`
  width: 50%;
  height: auto;

  margin-top: ${RFValue(10)}px;
  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;

  background-color: ${({theme}) => theme.COLORS.blue};
  border-radius: ${RFValue(5)}px;

  align-items: center;
`;

export const TextButtonUn = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.FONTS.bold};

  color: ${({theme}) => theme.COLORS.white};
`;

export const ButtonSalve = styled.TouchableOpacity`
  width: 50%;
  height: auto;
  
  margin-top: ${RFValue(10)}px;

  padding: ${RFValue(6)}px;

  border: 1px solid ${({theme}) => theme.COLORS.white};
  border-radius: ${RFValue(20)}px;
`;

export const TextSalve = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.FONTS.bold};

  color: ${({theme}) => theme.COLORS.white};
`;