import React from 'react';
import { Platform } from 'react-native';
import { Button } from '../../components/Button';
import { Search } from '../../components/Search';
import { Container, Content, Text, Wrapper } from './styles';

export function Register() {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Wrapper>

        <Content>
          <Text>Nome:</Text>
          <Search haveIcon={false} placeholder='Digite o nome do item' />

          <Text>Imagem:</Text>
          <Search haveIcon={false} placeholder='Digite a url da imagem' />

          <Text>Preço:</Text>
          <Search haveIcon={false} placeholder='Digite o valor do item' />

          <Text>Quantidade:</Text>
          <Search haveIcon={false} placeholder='Digite a quantidade' />
        </Content>

        <Button title='registrar' />
      </Wrapper>
    </Container>
  );
}