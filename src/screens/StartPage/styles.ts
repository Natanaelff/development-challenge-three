import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.gray};
  
  padding: ${RFValue(20)}px ${RFValue(20)}px;

  align-items: center;
  justify-content: flex-end;
`;
