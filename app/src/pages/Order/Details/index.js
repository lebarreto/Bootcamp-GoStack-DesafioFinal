import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BodyOrder,
  HeaderOrder,
  OrderTitle,
  Body,
  Text,
  Info,
  SituationBody,
  RowInfo,
  InfoRetirada,
  TextRetirada,
  Footer,
  SubmitButton,
  BtnText,
  Line,
  FooterRow,
  SubmitButtonMiddle,
  SubmitButtonEnd,
} from './styles';

export default function Details() {
  const routes = useRoute();
  const { data } = routes.params;

  const navigation = useNavigation();

  return (
    <Container>
      <BodyOrder>
        <HeaderOrder>
          <Icon name="local-shipping" size={30} color="#7D40E7" />
          <OrderTitle>Informações de entrega </OrderTitle>
        </HeaderOrder>
        <Body>
          <Text>DESTINATÁRIO</Text>
          <Info>{data.recipient.name}</Info>
          <Text>ENDEREÇO DE ENTREGA</Text>
          <Info>
            {data.recipient.street}, {data.recipient.number},{' '}
            {data.recipient.city} - {data.recipient.state}, {data.recipient.zip}
          </Info>
          <Text>PRODUTO</Text>
          <Info>{data.product}</Info>
        </Body>
      </BodyOrder>
      <SituationBody>
        <HeaderOrder>
          <Icon name="event" size={30} color="#7D40E7" />
          <OrderTitle>Situação da entrega </OrderTitle>
        </HeaderOrder>
        <Body>
          <Text>STATUS</Text>
          <Info>
            {data.end_dateFormated
              ? 'Entregue'
              : 'Retirada' && data.start_dateFormated
              ? 'Retirada'
              : 'Pendente'}
          </Info>
          <RowInfo>
            <Body>
              <Text>DATA DE RETIRADA</Text>
              <Info>
                {data.start_dateFormated ? data.start_dateFormated : null}
              </Info>
            </Body>
            <Body>
              <TextRetirada>DATA DE RETIRADA</TextRetirada>
              <InfoRetirada>
                {data.start_dateFormated ? data.start_dateFormated : null}
              </InfoRetirada>
            </Body>
          </RowInfo>
        </Body>
      </SituationBody>
      <Footer>
        <FooterRow>
          <SubmitButton
            onPress={() => navigation.navigate('InformProblem', { data })}
          >
            <Icon name="cancel" size={30} color="#E74040" />
            <BtnText>Informar Problema</BtnText>
          </SubmitButton>
          <Line />
          <SubmitButtonMiddle
            onPress={() => navigation.navigate('VisualizeProblems', { data })}
          >
            <Icon name="info" size={30} color="#E7BA40" />
            <BtnText>Visualizar Problema</BtnText>
          </SubmitButtonMiddle>
          <Line />
          <SubmitButtonEnd>
            <Icon
              name="check-circle"
              size={30}
              color="#7D40E7"
              onPress={() => navigation.navigate('Confirm', { data })}
            />
            <BtnText>Confirmar Entrega</BtnText>
          </SubmitButtonEnd>
        </FooterRow>
      </Footer>
    </Container>
  );
}
