import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
  opacity: 1;
  display: flex;
  justify-content: center;
  padding: 50px 120px;
`;

export const EditOrder = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const FormOrder = styled.div`
  top: 150px;
  left: 270px;
  width: 930px;
  height: 224px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  .divSelect {
    display: inline-block;

    label {
      color: #444;
      font-weight: bold;
      margin-top: 20px;
      margin-left: 40px;
      width: 77px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      opacity: 1;
      font-size: 16px;
      display: inline-block;
    }

    .del {
      width: 405px;
      margin-left: 38px;
      margin-top: 10px;
    }

    .rec {
      width: 405px;
      padding-right: 10px;
      margin-left: 38px;
      margin-top: 10px;
    }
  }

  .divInp {
    label {
      color: #444;
      font-weight: bold;
      margin-top: 20px;
      margin-left: 40px;
      width: 300px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      opacity: 1;
      font-size: 16px;
      display: inline-block;
    }

    input {
      top: 293px;
      margin-left: 40px;
      margin-top: 10px;
      width: 850px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;
    }
  }
`;
