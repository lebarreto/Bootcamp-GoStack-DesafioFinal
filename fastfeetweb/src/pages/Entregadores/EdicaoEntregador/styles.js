import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
  opacity: 1;
  display: flex;
  justify-content: center;
  padding: 50px 120px;
`;

export const EditDeliveryman = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const FormDeliveryman = styled.div`
  top: 150px;
  left: 270px;
  width: 930px;
  height: 400px;
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

  .divEmail {
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
`;
