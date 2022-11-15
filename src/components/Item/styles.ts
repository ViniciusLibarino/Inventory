import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: #1c1c1c;
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(12)}px;
  padding: ${RFValue(12)}px ${RFValue(8)}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(4)}px;
  margin-right: ${RFValue(12)}px;
`;

export const Wrapper = styled.View`
  align-items: flex-start;
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(4)}px;
`;

export const Info = styled.Text`
  color: #9a9a9a;
  font-size: ${RFValue(12)}px;
`;

export const Content = styled.View`
  align-items: center;
  background-color: #3a3a3a;
  border-radius: ${RFValue(8)}px;
  height: ${RFValue(28)}px;
  justify-content: center;
  width: ${RFValue(28)}px;
`;

export const Value = styled.Text`
  color: #f9f9f9;
  font-size: ${RFValue(12)}px;
`;
