import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ViewModal = styled.View`
  width: 100%;
  height: auto;

  padding: ${RFValue(10)}px ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;

  background-color: ${({theme}) => theme.COLORS.white};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const AddView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(15)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.COLORS.black};
  font-family: ${({theme}) => theme.FONTS.bold};

  text-align: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;

  border-radius: ${RFValue(30)}px;
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
  width: ${RFValue(160)}px;
  height: auto;
  
  padding-top: ${RFValue(5)}px;
  padding-bottom: ${RFValue(5)}px;

  border: 1px solid ${({theme}) => theme.COLORS.black};
  background-color: ${({theme}) => theme.COLORS.white};
  border-radius: ${RFValue(5)}px;
`;

export const TextInputName = styled.TextInput`
  width: ${RFValue(150)}px;

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

  border: 1px solid ${({theme}) => theme.COLORS.black};
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

export const ViewButton = styled.View`
  margin-top: ${RFValue(10)}px;
`;