import styled from 'styled-components';

export const Container = styled.li`
  height: 55px;
  padding-left: 25px;
  padding-right: 13px;
  display: grid;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin-bottom: 10px;

  grid-template-columns: 0.5fr 2fr 4fr 1fr;

  > small:last-child {
    text-align: right;
  }

  > small {
    font-size: 16px;
    color: #666;
    text-align: left;
    margin: auto 0;
  }
`;

export const Button = styled.div`
  padding: 10px;

  > div {
    display: flex;
    align-items: center;
    padding-bottom: 6px;

    button {
      background: none;
      border: none;
      display: flex;
    }

    svg {
      margin-right: 8px;
    }

    span {
      font-size: 16px;
      color: #999;
    }

    :nth-last-child(-n + 2) {
      padding-top: 6px;
      border-top: 1px solid #eee;
    }

    :nth-last-child(1) {
      padding-bottom: 0;
    }
  }
`;
