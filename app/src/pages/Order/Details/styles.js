import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BodyOrder = styled.View`
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

export const Body = styled.View`
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  margin-top: 10px;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: #666666;
  margin-top: 5px;
`;

export const SituationBody = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;
  border: solid 1px #0000001a;
  border-radius: 4px;
  height: 170px;
`;

export const RowInfo = styled.View`
  height: 200px;
  flex-direction: row;
  align-items: flex-start;
`;

export const TextRetirada = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 30px;
`;

export const InfoRetirada = styled.Text`
  font-size: 16px;
  color: #666666;
  margin-top: 5px;
  margin-left: 30px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;
  border: solid 1px #0000001a;
  border-radius: 4px;
  height: 72px;
  background: #f4effc;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 12px;
  color: #999999;
`;

export const Line = styled.View`
  background: #7d40e7;
  height: 1px;
  width: 70px;
  transform: rotate(90deg);
  margin-top: 35px;
  margin-left: -30px;
`;

export const FooterRow = styled.View`
  height: 200px;
  flex-direction: row;
  align-items: flex-start;
`;

export const SubmitButtonMiddle = styled.TouchableOpacity`
  margin-left: -30px;
  align-items: center;
  margin-top: 10px;
`;

export const SubmitButtonEnd = styled.TouchableOpacity`
  align-items: center;
  margin-left: -30px;
  margin-top: 10px;
`;
