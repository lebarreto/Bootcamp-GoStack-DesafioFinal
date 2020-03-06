import styled from 'styled-components';

export const Container = styled.li`
  height: 55px;
  padding-left: 25px;
  padding-right: 13px;
  display: grid;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin-bottom: 10px;

  grid-template-columns: 3fr 4fr 1fr;

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

    .modal {
      font-size: 16px;
      background: #ffffff 0% 0% no-repeat padding-box;
      width: 400px;
      height: 353px;
      border-radius: 4px;
      opacity: 1;
    }

    .modal > .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: -10px;
      top: -10px;
      font-size: 24px;
      background: #7159c1;
      border-radius: 18px;
      border: 1px solid #fff;
      color: #fff;
    }

    .modal > .header {
      margin-top: 10px;
      margin-left: 20px;
      height: 30px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-weight: bold;
    }

    .modal > .content {
      margin-left: 20px;
      width: 149px;
      text-align: left;
      letter-spacing: 0;
      color: #666666;
      opacity: 1;
      padding-bottom: 5px;
    }
  }
`;
