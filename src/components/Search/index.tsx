import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Icon, Input } from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  haveIcon: boolean;
}

export function Search({ haveIcon, ...rest }: Props) {
  return (
    <Container>
      {haveIcon && (
        <Icon name='search' size={20} />
      )}
      <Input {...rest} placeholderTextColor="#6a6a6a" />
    </Container>
  );
}