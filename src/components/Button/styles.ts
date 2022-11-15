import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: #ff8c00;
  border-radius: ${RFValue(32)}px;
  justify-content: center;
  padding: ${RFValue(12)}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: #ffff;
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  text-transform: uppercase;
`;
