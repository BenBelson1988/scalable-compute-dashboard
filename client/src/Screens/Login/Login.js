import * as Style from "./style";
import ec2Pic from "../../Pics/Amazon-EC2-image.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserFromDB } from "../../stores/userSlicer";
import { Loader } from "../../common/Loader/Loader";

export default ({ error, loadingUser }) => {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    user: "",
    password: "",
    userError: "",
    passwordError: "",
    showPassword: false,
  });

  const handleFormInputs = ({ target: { value } }, type) => {
    type === "user"
      ? setLoginDetails({ ...loginDetails, user: value })
      : setLoginDetails({ ...loginDetails, password: value });
  };

  const handleFormChange = (type) => {
    type === "user"
      ? setLoginDetails({ ...loginDetails, userError: "" })
      : setLoginDetails({ ...loginDetails, passwordError: "" });
  };

  const handleLogin = () => {
    if (loginDetails.user === "") {
      setLoginDetails({ ...loginDetails, userError: "User name is required" });
      return;
    }
    if (loginDetails.password === "") {
      setLoginDetails({
        ...loginDetails,
        passwordError: "Password is required",
      });
      return;
    }
    dispatch(getUserFromDB(loginDetails));
  };

  const toggleShowPassword = () => {
    setLoginDetails({
      ...loginDetails,
      showPassword: !loginDetails.showPassword,
    });
  };

  return (
    <>
      {loadingUser && <Loader data-testid="loader" />}
      <Style.H2>Hi guest, Log in to see youre active EC2</Style.H2>
      <Style.LoginCard>
        <Style.ColumnDiv>
          <Style.H3>
            AWS Elastic Computing (EC2) - Free Cloud Services with AWS
          </Style.H3>
          <Style.InputLabel>User name</Style.InputLabel>
          <Style.LoginInput
            data-testid="userNameInput"
            onBlur={(e) => handleFormInputs(e, "user")}
            placeholder="user name"
            onChange={() => handleFormChange("user")}
          />
          {loginDetails.userError && (
            <Style.Error data-testid="userInputError">
              {loginDetails.userError}
            </Style.Error>
          )}
          <Style.InputLabel>Password</Style.InputLabel>
          <Style.LoginInput
            data-testid="passwordInput"
            onBlur={(e) => handleFormInputs(e, "password")}
            placeholder="password"
            type={loginDetails.showPassword ? "text" : "password"}
            onChange={() => handleFormChange()}
          />
          {loginDetails.passwordError && (
            <Style.Error data-testid="passwordInputError">
              {loginDetails.passwordError}
            </Style.Error>
          )}
          {error && <Style.Error data-testid="error">{error}</Style.Error>}
          <Style.LoginButton data-testid="loginButton" onClick={handleLogin}>
            Login
          </Style.LoginButton>
          <Style.ShowPassword
            data-testid="showPassword"
            show={loginDetails.showPassword}
            onClick={() => toggleShowPassword()}
          ></Style.ShowPassword>
        </Style.ColumnDiv>
        <Style.ColumnDiv>
          <Style.EC2Image src={ec2Pic} />
        </Style.ColumnDiv>
      </Style.LoginCard>
    </>
  );
};
