import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const top = getStatusBarHeight();
const bottom = getBottomSpace();

export const Container = styled.KeyboardAvoidingView`
  background-color: #101010;
  flex: 1;
  padding-top: ${top}px;
  padding-bottom: ${bottom}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: ${RFValue(32)}px ${RFValue(16)}px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(6)}px;
`;
