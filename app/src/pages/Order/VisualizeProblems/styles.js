import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #7d40e7;
  height: 155px;
`;

export const Title = styled.Text`
  color: #ffffff;
  margin-top: 20px;
  align-self: center;
  font-size: 20px;
  font-weight: bold;
`;

export const ProblemBody = styled.View`
  flex-direction: column;
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  border: solid 1px #0000001a;
  border-radius: 4px;
  height: 50px;
  background: #fff;
`;

export const ProblemDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  color: #999999;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 5px;
`;

export const Date = styled.Text`
  color: #999999;
  font-size: 16px;
  padding-top: 10px;
`;
