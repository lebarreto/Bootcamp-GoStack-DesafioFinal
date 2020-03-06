import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px dashed #dddddd;
      background: #f4effc;
      margin-top: 20px;
      margin-left: 40%;
    }
    input {
      display: none;
    }
  }
`;
