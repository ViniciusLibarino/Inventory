import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #1c1c1c;
  border-radius: ${RFValue(8)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Icon = styled(FontAwesome)`
  color: #6a6a6a;
  margin-left: ${RFValue(8)}px;
  margin-right: ${RFValue(-4)}px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #f9f9f9;
  font-size: ${RFValue(12)}px;
  padding: ${RFValue(12)}px;
`;
