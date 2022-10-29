import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';
import { Button } from '../../components/Button';
import { Item, ItemData } from '../../components/Item';
import { Search } from '../../components/Search';
import { useSelect } from '../../hooks/select';
import { Container, Text, List, Wrapper, TextBold, Content, Info } from './styles';

const data = [{
  'id': 0,
  'title': "Pneu Michellin",
  'image': "https://bsdunlop.fbitsstatic.net/img/p/pneu-sumitomo-195-55-r15-bc20-85h-111027/297501.jpg?w=590&h=590&v=no-change&qs=ignore",
  'price': 350,
  'amount': 24,
},
{
  'id': 1,
  'title': "Pneu Goodyear",
  'image': "http://i.mlcdn.com.br/portaldalu/fotosconteudo/48604.jpg",
  'price': 375,
  'amount': 12,
},
{
  'id': 2,
  'title': "Pneu Continental",
  'image': "https://dellavia.vteximg.com.br/arquivos/ids/156876-1000-1000/311045.jpg?v=636632998922930000",
  'price': 239,
  'amount': 3,
},
{
  'id': 3,
  'title': "Pneu Pirelli",
  'image': "https://www.tecfil.com.br/wp-content/uploads/2022/02/TECFIL_MATERIA_03_01.jpg",
  'price': 410,
  'amount': 47,
},
{
  'id': 4,
  'title': "Pneu Yokohama",
  'image': "https://images-americanas.b2w.io/produtos/1474100214/imagens/pneu-275-80r22-5-149j-sp176-dunlop/1474100222_1_large.jpg",

  'price': 389,
  'amount': 20,
},
{
  'id': 5,
  'title': "Pneu Dunlop",
  'image': "https://http2.mlstatic.com/D_NQ_NP_683720-MLB48892576449_012022-O.jpg",

  'price': 449,
  'amount': 17,
},
{
  'id': 6,
  'title': "Pneu Nexxen",
  'image': "https://http2.mlstatic.com/D_NQ_NP_923929-MLB49774255396_042022-O.jpg",
  'price': 399,
  'amount': 42,
},
{
  'id': 7,
  'title': "Pneu Bridgestone",
  'image': "https://pneular.com.br/wp-content/uploads/2020/03/pneu-27580r225-borrachudo.jpg.jpg",
  'price': 420,
  'amount': 55,
}]

export function Home() {
  const { setItem } = useSelect()
  const navigation: NavigationProp<any, any> = useNavigation()

  function handleRedirectToDetails(item: ItemData) {
    setItem(item)
    navigation.navigate("Details")
  }

  function handleRedirectToRegister() {
    navigation.navigate("Register")
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Wrapper>

        <Content>
          <Text>Olá, <TextBold>Vinícius</TextBold></Text>
          <Info>itens em estoque: {data.length}</Info>
        </Content>

        <Search haveIcon placeholder='Busque por um item' />

        <List
          data={data}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) =>
              <Item
                activeOpacity={.7}
                onPress={() => handleRedirectToDetails(item)}
                data={item}
              />
          }
          showsVerticalScrollIndicator={false}
        />

        <Button
          title='cadastrar'
          onPress={handleRedirectToRegister}
          activeOpacity={.7}
        />

      </Wrapper>
    </Container>
  );
}