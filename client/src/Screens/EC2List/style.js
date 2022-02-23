import styled from "styled-components";

export const listPageWrraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: 40vw;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px;
  border-radius: 20px;
  background: #ffb2b2;
`;

export const H1 = styled.h1`
  font-size: 2vw;
`;

export const TableHeading = styled.div`
  flex: 1;
  font-size: 1.5vw;
  font-weight: bold;
  cursor: pointer;
`;

export const TableHeadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 4vw;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #4659d9;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid;
  width: 10vw;
  outline: none;
  height: 2vw;
  background: #ffb2b2;
`;

export const SearchText = styled.h5`
  font-size: 1vw;
  color: black;
  margin: 0;
  margin-right: 0.5vw;
  margin-left: 2vw;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3vw;
  align-items: center;
  margin-bottom: 1vw;
`;

export const CheckBox = styled.div`
  cursor: pointer;
  width: 1vw;
  height: 1vw;
  border-radius: 50px;
  background: ${(props) => (props.active ? "black" : "white")};
  margin-right: -1.5vw;
  margin-left: 2vw;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;
