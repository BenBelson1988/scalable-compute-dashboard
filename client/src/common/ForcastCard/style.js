import styled from "styled-components";

export const ForcastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100%;
  margin: 5vw;
  margin-right: 8vw;
  margin-left: 8vw;
  background: #27737d;
  border-radius: 30px;
`;

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
`;

export const SpaceRowDiv = styled(FlexRowDiv)`
  width: 100%;
  justify-content: space-evenly;
  overflow: auto;
`;

export const CityName = styled.h3`
  font-size: 1.5vw;
  font-weight: 400;
  margin: 0;
  margin-top: 2vw;
  margin-bottom: -1vw;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CountryName = styled.h4`
  font-size: 1.5vw;
  font-weight: 200;
  color: #a8c6cb;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ClosestHour = styled.h4`
  font-size: 1.2vw;
  font-weight: 200;
  color: #a8c6cb;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Degrees = styled.h1`
  font-size: 6vw;
  letter-spacing: -16px;
  margin: 0;
  margin-top: ${(props) => (props.symbol ? "-1vw" : 0)};
  margin-bottom: -3vw;
  @media (max-width: 768px) {
    font-size: 50px;
    letter-spacing: -5px;
  }
`;

export const HeadLines = styled.h5`
  font-size: 1.2vw;
  font-weight: ${(props) => (props.description ? 500 : 200)};
  color: ${(props) => (props.description ? "white" : "#e8f1f2")};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Condition = styled.h2`
  margin: 0;
  font-size: 2vw;
  font-weight: 200;
  color: #e8f1f2;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Space = styled.div`
  height: ${(props = 0) => props.height + "vw"};
`;

export const HoursTemp = styled.h4`
  font-size: 1.2vw;
  font-weight: ${(props) => (props.description ? 500 : 200)};
  color: ${(props) => (props.description ? "white" : "#a8c6cb")};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
