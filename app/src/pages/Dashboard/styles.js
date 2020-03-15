import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: flex-start;
  margin-left: 10px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #444444;
  margin-bottom: 15px;
`;

export const UserView = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const Header = styled.View`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  align-items: center;
  margin-right: 50px;
  background: #f5f5f5;
  margin-left: 5px;
`;

export const Nav = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #444;
  font-weight: bold;
  margin-left: 30px;
`;

export const NavOptions = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Option = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
`;
export const TextOption = styled.Text`
  font-size: 14px;
  color: ${props => (props.enabled ? '#7D40E7' : '#999999')};
  font-weight: bold;
`;

export const BodyOrder = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

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
