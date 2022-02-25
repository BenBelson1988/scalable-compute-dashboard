import { cleanup, waitFor } from "@testing-library/react";
import { render, fireEvent } from "../../test-utils";

import Login from "./Login";

const NormalStateTest = () =>
  render(<Login error={false} loadingUser={false} />);

const loadingTest = () => render(<Login error={false} loadingUser={true} />);

const errorTest = () => render(<Login error={true} loadingUser={false} />);

describe("Login component rendering tests", () => {
  beforeEach(() => {
    cleanup();
  });
  it("render user input", () => {
    const userInput = NormalStateTest().getByTestId("userNameInput");
    expect(userInput).toBeInTheDocument();
  });
  it("render password input", () => {
    const userPassword = NormalStateTest().getByTestId("passwordInput");
    expect(userPassword).toBeInTheDocument();
  });

  it("render login button", () => {
    const loginButton = NormalStateTest().getByTestId("loginButton");
    expect(loginButton).toBeInTheDocument();
  });

  it("hide loader when not loading", () => {
    const loader = NormalStateTest().queryByTestId("loader");
    expect(loader).toBeFalsy();
  });

  it("show loader while loading", () => {
    const loader = loadingTest().getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("don't show error when no error", () => {
    const error = NormalStateTest().queryByTestId("error");
    expect(error).toBeFalsy();
  });

  it("show error when error apear", () => {
    const error = errorTest().getByTestId("error");
    expect(error).toBeInTheDocument();
  });
});

describe("Login component events test", () => {
  beforeEach(() => {
    cleanup();
  });
  const userInput = NormalStateTest().getByTestId("userNameInput");

  it("test user input event", () => {
    const value = "somevalue";
    fireEvent.change(userInput, { target: { value } });
    expect(userInput.value).toBe(value);
  });

  it("test password input event", () => {
    const passwordInput = NormalStateTest().getByTestId("passwordInput");
    const value = "somePassword";
    fireEvent.change(passwordInput, { target: { value } });
    expect(passwordInput.value).toBe(value);
  });

  it("test Login button when user empty", () => {
    const loginButton = NormalStateTest().getByTestId("loginButton");
    fireEvent.click(loginButton);
    const userInputError = NormalStateTest().queryByTestId("userInputError");
    expect(userInputError).toBeInTheDocument();
  });

  it("test Login button when password empty", () => {
    const loginButton = NormalStateTest().getByTestId("loginButton");
    const value = "somevalue";
    fireEvent.change(userInput, { target: { value } });
    fireEvent.click(loginButton);
    const passwordInputError =
      NormalStateTest().queryByTestId("passwordInputError");
    waitFor(() => expect(passwordInputError).toBeInTheDocument());
  });
});
