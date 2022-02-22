import styled from "styled-components";
import showPassword from "../../Pics/show-password.png";
import hidePassword from "../../Pics/hide-password.jpg";

export const H2 = styled.h2`
  font-size: 2vw;
  color: #004d6f;
  letter-spacing: -1px;
`;

export const H3 = styled.h3`
  font-size: 1vw;
  color: #1c1e1f;
  letter-spacing: -1px;
  text-align: center;
  margin: 0;
  margin-top: -1vw;
  margin-bottom: 0.5vw;
`;

export const ColumnDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 40vw;
  height: 20vw;
  background: #b2c3cb;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
`;

export const LoginInput = styled.input`
  border: none;
  width: 13vw;
  height: 2vw;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px;
  padding-left: 5px;
  transition: 0.5s;
  z-index: 1;
  &::placeholder {
    opacity: 0.7;
    font-size: 0.8vw;
  }
  &:hover {
    transform: translateY(-3px);
  }
`;
export const EC2Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
`;

export const LoginButton = styled.div`
  border: none;
  color: white;
  width: 10vw;
  line-height: 2vw;
  height: 2vw;
  text-align: center;
  margin-top: 1vw;
  border-radius: 5px;
  transition: 0.5s;
  background: #004d6f;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

export const ShowPassword = styled.img`
  position: absolute;
  cursor: pointer;
  left: 0.5vw;
  top: 11vw;
  background-image: url(${(props) =>
    props.show ? showPassword : hidePassword});
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2vw;
  width: 2vw;
  height: 2vw;
  transition: 0.3s;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const InputLabel = styled.label`
  font-size: 0.8vw;
  padding-right: 10vw;
`;

export const Error = styled.p`
  margin: 0;
  margin-top: -15px;
  color: red;
  font-size: 0.7vw;
`;
