import React from 'react';
import { useSelect } from '../../hooks/select';
import { Container, Text, Wrapper } from './styles';

export function Details() {
  const { item } = useSelect();
  console.log(item.amount);

  return (
    <Container>
      <Wrapper>
        <Text>Detalhes do item</Text>
      </Wrapper>
    </Container>
  );
}
