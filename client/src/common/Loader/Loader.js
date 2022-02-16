import styled from "styled-components";
import loader from "../../Pics/Spinner.svg";

export const Loader = styled.div`
  position: absolute;
  top: 40%;
  left: 45%;
  background: url(${loader});
  background-position: center;
  width: 200px;
  height: 200px;
  opacity: 1;
  z-index: 20;
  background-repeat: no-repeat;
`;
