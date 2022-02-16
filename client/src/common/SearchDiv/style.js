import styled from "styled-components";
import FintekLogo from "../../Pics/fintekLogo.svg";

export const DivWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  margin: 4vw;
  margin-top: 5vw;
  text-align: left;
  position: relative;
`;

export const SvgIcon = styled.svg`
  background-image: url(${FintekLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 5vw;
  width: 5vw;
  height: 3vw;
  @media (max-width: 768px) {
    background-size: 20vw;
    width: 20vw;
    height: 12vw;
  }
`;

export const MainH2 = styled.h2`
  font-weight: 300;
  letter-spacing: 0px;
  font-size: 2vw;
  color: #707070;
  width: 20vw;
  margin-left: 3vw;
  margin-top: 5vw;
  margin-bottom: 3vw;
  @media (max-width: 768px) {
    margin: 0;
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
`;
