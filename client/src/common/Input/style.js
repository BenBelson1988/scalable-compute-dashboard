import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
`;

export const CityNameText = styled.h4`
  color: #707070;
  font-weight: 200;
  font-size: 1vw;
  margin: 0;
  margin-bottom: 1vh;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  width: 100%;
  height: 3vw;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

export const Input = styled.input`
  border: none;
  width: 80%;
  font-size: 1.5vw;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    margin: 0;
    font-size: 15px;
  }
`;

export const SearchButton = styled.div`
  cursor: pointer;
  width: 20%;
  background: #046b3b;
  letter-spacing: 0px;
  color: #ffffff;
  font-size: 1vw;
  text-align: center;
  line-height: 2vw;
  font-weight: 200;
  margin: 1.5%;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
