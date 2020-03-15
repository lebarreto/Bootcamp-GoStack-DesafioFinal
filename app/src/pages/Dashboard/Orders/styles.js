import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
`;

export const BodyOrder = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;
  border: solid 1px #0000001a;
  border-radius: 4px;
`;

export const HeaderOrder = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OrderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 20px;
`;

export const ProgressBar = styled.View`
  height: 44px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressDot = styled.View`
  width: 10px;
  height: 10px;
  color: #fff;
  border-radius: 8px;
  border: 1px solid #7d40e7;
  background: ${props =>
    props.init
      ? '#7d40e7'
      : '#fff' && props.startDate
      ? '#7d40e7'
      : '#fff' && props.endDate
      ? '#7d40e7'
      : '#fff'};
`;

export const ProgressLine = styled.View`
  flex: 1;
  background: #7d40e7;
  height: 2px;
`;

export const ProgressLegend = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Legend = styled.Text`
  font-size: 12px;
  color: #999;
  font-weight: bold;
`;

export const OrderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OrderLabel = styled.Text`
  font-size: 12px;
  color: #999999;
  font-weight: bold;
`;

export const Date = styled.Text`
  font-size: 16px;
  color: #444444;
  font-weight: bold;
`;

export const City = styled.Text`
  font-size: 16px;
  color: #444444;
  font-weight: bold;
`;

export const OrderField = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OrderFooter = styled.View`
  background: #f4effc;
  padding: 0 4px;
  margin-top: 20px;
  height: 65px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  color: #7d40e7;
  font-weight: bold;
`;
