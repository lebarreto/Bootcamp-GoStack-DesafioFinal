import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
  opacity: 1;
  display: flex;
  justify-content: center;
  padding: 50px 120px;
`;

export const RecipientContent = styled.div`
  width: 100%;
`;

export const Table = styled.div`
  padding-top: 20px;

  > section {
    display: grid;
    padding-left: 25px;
    padding-right: 13px;
    grid-template-columns: 0.5fr 2fr 4fr 1fr;
    margin-bottom: 15px;

    strong:last-child {
      text-align: right;
    }

    strong {
      font-size: 16px;
      color: #444;
    }
  }

  > div + div {
    margin-top: 20px;
  }
`;
