import styled from "styled-components";

export const TimeZoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 1vw;
  left: 5;
`;

export const TimeZoneH5 = styled.h5`
  font-weight: 200;
  letter-spacing: 0px;
  font-size: 0.8vw;
  color: #707070;
  margin: 0;
  margin-left: 3vw;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
