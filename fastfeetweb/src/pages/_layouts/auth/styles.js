import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    top: 225px;
    left: 540px;
    width: 360px;
    height: 425px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;
    margin-top: 30px;

    img {
      margin-left: auto;
      margin-right: auto;
      display: block;
      padding-top: 50px;
      padding-bottom: 40px;
    }

    input {
      top: 397px;
      left: 570px;
      width: 300px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding: 0 15px;

      &::placeholder {
        top: 409px;
        left: 585px;
        width: 150px;
        height: 21px;
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }

    span {
      color: #7d40e7;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      display: block;
    }

    button {
      top: 545px;
      left: 570px;
      width: 300px;
      height: 45px;
      margin: 15px 0 0;
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      color: #fff;
      font-size: 16px;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }
`;
