import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(32)}px;
  width: 100%;
  background-color: #ff8c00;
`;

export const Title = styled.Text`
  color: #ffff;
  font-size: ${RFValue(14)}px;
  text-transform: uppercase;
  font-weight: 600;
`;
