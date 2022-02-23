import styled from "styled-components";

export const List = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  border-radius: 0 0 0 20px;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.tabIndex % 2 === 0 ? "#d8f4ff" : "white")};
  height: 2vw;
  width: 100%;
`;

export const TableCube = styled.div`
  flex: 1;
  font-size: 0.7vw;
  font-weight: 400;
  text-align: center;
`;
