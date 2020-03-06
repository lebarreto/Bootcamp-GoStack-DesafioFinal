import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
  opacity: 1;
  display: flex;
  justify-content: center;
  padding: 50px 120px;
`;

export const EditRecipient = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const FormRecipient = styled.div`
  top: 150px;
  left: 270px;
  width: 930px;
  height: 320px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  .divName {
    padding-top: 20px;
    padding-left: 20px;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      margin-top: 10px;
      width: 890px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  .divStreet {
    padding-top: 20px;
    padding-left: 20px;
    float: left;
    width: 50%;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      margin-top: 10px;
      width: 518px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  .divNumber {
    padding-top: 20px;
    padding-left: 580px;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      margin-top: 10px;
      width: 150px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  .divComplement {
    padding-right: 20px;
    padding-left: 60px;
    margin-top: -73px;
    float: right;
    width: 25%;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      margin-top: 10px;
      width: 140px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  .divCity {
    padding-top: 20px;
    padding-left: 20px;
    float: left;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      margin-top: 10px;
      width: 269px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  .divState {
    padding-top: 20px;
    padding-left: 320px;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      margin-top: 10px;
      width: 269px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  .divZip {
    margin-top: -73px;
    padding-right: 40px;
    float: right;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      margin-top: 10px;
      width: 269px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }
`;
