import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import {
  BodyOrder,
  HeaderOrder,
  OrderTitle,
  ProgressBar,
  ProgressDot,
  ProgressLine,
  ProgressLegend,
  Legend,
  OrderInfo,
  OrderLabel,
  Date,
  City,
  OrderField,
  OrderFooter,
  SubmitButton,
  BtnText,
} from './styles';

export default function Orders({ data }) {
  const navigation = useNavigation();

  return (
    <BodyOrder>
      <HeaderOrder>
        <Icon name="local-shipping" size={50} color="#7D40E7" />
        <OrderTitle>Encomenda {data.id}</OrderTitle>
      </HeaderOrder>
      <ProgressBar>
        <ProgressDot init />
        <ProgressLine />
        <ProgressDot startDate={data.start_dateFormated} />
        <ProgressLine />
        <ProgressDot endDate={data.end_dateFormated} />
      </ProgressBar>
      <ProgressLegend>
        <Legend>Aguardando retirada</Legend>
        <Legend>Retirada</Legend>
        <Legend>Entregue</Legend>
      </ProgressLegend>
      <OrderFooter>
        <OrderInfo>
          <OrderLabel>Data</OrderLabel>
          <OrderLabel>Cidade</OrderLabel>
          <OrderLabel></OrderLabel>
        </OrderInfo>
        <OrderField>
          <Date>{data.start_dateFormated}</Date>
          <City>{data.recipient.city}</City>
          <SubmitButton
            onPress={() => navigation.navigate('Details', { data })}
          >
            <BtnText>Ver detalhes</BtnText>
          </SubmitButton>
        </OrderField>
      </OrderFooter>
    </BodyOrder>
  );
}
