import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  padding: ${RFValue(12)}px ${RFValue(8)}px;
  background-color: #1c1c1c;
  margin-bottom: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(4)}px;
  margin-right: ${RFValue(12)}px;
`;

export const Wrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex: 1;
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
  width: ${RFValue(28)}px;
  height: ${RFValue(28)}px;
  border-radius: ${RFValue(8)}px;
  background-color: #3a3a3a;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  color: #f9f9f9;
  font-size: ${RFValue(12)}px;
`;
