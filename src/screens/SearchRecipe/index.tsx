import React, { useState, useEffect }  from 'react';
import { FlatList } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Container,
  Header,
  Title,
  SubTitleSearch,
  TitleSearch,
  ButtonGoBack,
  ViewSearch,
  ButtonSearch,
  TextButton,
  ListNull,
} from './styles';

import { Icon } from "@components/Icon";
import theme from "@theme/index";
import { rootParams } from "@utils/rootParams";
import recipe from '../../../__mocks__/recipe.mock.json';

type rootStackParams = NativeStackNavigationProp<rootParams, 'SearchRecipeDetails'>;

export function SearchRecipe() {
  const navigation = useNavigation<rootStackParams>();
  const route = useRoute<any>();
  const { details } = route.params;

  const [list, setList] = useState(recipe);
  const [filterSearch, setFIlterSearch] = useState([]);

  useEffect(() => {
    if (details === '') {
      setList(recipe);
    } else {
      setList(
        recipe.filter((items) => {
          if(items.mass.indexOf(details) > -1 ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [details])

  function handleGoBck() {
    navigation.goBack();
  }

  console.log('list', list);
  return (
    <Container>
      <Header>
        <ButtonGoBack onPress={handleGoBck}>
          <Icon name="arrow-left2" size={RFValue(20)} color={theme.COLORS.white} />
        </ButtonGoBack>
      </Header>

      <Title>Resultados de busca</Title>


      {
        list.length === 0 && (
          <ListNull>
            <TitleSearch>Nenhuma receita encontrada!</TitleSearch>
          </ListNull>
        )
      }

      <FlatList
        data={list}
        contentContainerStyle={{ paddingBottom: RFValue(40) }}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ViewSearch onPress={() => navigation.navigate('SearchRecipeDetails', {details: item})}>
            <TitleSearch>{item.title}</TitleSearch>
            <SubTitleSearch>{item.subTitle}</SubTitleSearch>

            <ButtonSearch>
              <TextButton>Ver Receita</TextButton>
            </ButtonSearch>
          </ViewSearch>
        )}
      />
    </Container>
  )
}