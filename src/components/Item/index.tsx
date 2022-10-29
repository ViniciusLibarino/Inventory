import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Content, Image, Info, Text, Value, Wrapper } from './styles';

export interface ItemData {
  id: number
  title: string
  image: string
  price: number
  amount: number
}

interface Props extends TouchableOpacityProps {
  data: ItemData
}

export function Item({ data, ...rest }: Props) {
  return (
    <Container {...rest}>

      <Image source={{ uri: data.image }} />

      <Wrapper>
        <Text>{data.title}</Text>
        <Info>Valor em estoque: {(data.amount * data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Info>
      </Wrapper>

      <Content>
        <Value>{data.amount}</Value>
      </Content>

    </Container>
  );
}