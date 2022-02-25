import { render, fireEvent } from "../../test-utils";

import Ec2ListScreen from "./Ec2ListScreen";

const NormalStateTest = () =>
  render(<Ec2ListScreen user={false} token={"token"} />);

const searchEC2Input = NormalStateTest().getByTestId("searchEC2Input");

describe("ec2 component rendering tests", () => {
  it("check for search input", () => {
    expect(searchEC2Input).toBeInTheDocument();
  });
  it("check for name check box", () => {
    const searchEC2Input = NormalStateTest().getByTestId("searchEC2Input");
    expect(searchEC2Input).toBeInTheDocument();
  });
  it("check for public IP check box", () => {
    const searchBypublicIP = NormalStateTest().getByTestId("searchBypublicIP");
    expect(searchBypublicIP).toBeInTheDocument();
  });
  it("check for private IP check box", () => {
    const searchByprivateIP =
      NormalStateTest().getByTestId("searchByprivateIP");
    expect(searchByprivateIP).toBeInTheDocument();
  });

  it("check for name Header", () => {
    const nameHead = NormalStateTest().getByTestId("nameHead");
    expect(nameHead).toBeInTheDocument();
  });
  it("check for Id Header", () => {
    const IDHead = NormalStateTest().getByTestId("IDHead");
    expect(IDHead).toBeInTheDocument();
  });
  it("check for type Header", () => {
    const typeHead = NormalStateTest().getByTestId("typeHead");
    expect(typeHead).toBeInTheDocument();
  });
  it("check for state Header", () => {
    const stateHead = NormalStateTest().getByTestId("stateHead");
    expect(stateHead).toBeInTheDocument();
  });
  it("check for az Header", () => {
    const azHead = NormalStateTest().getByTestId("azHead");
    expect(azHead).toBeInTheDocument();
  });
  it("check for public IP Header", () => {
    const publicIPHead = NormalStateTest().getByTestId("publicIPHead");
    expect(publicIPHead).toBeInTheDocument();
  });
  it("check for private IP Header", () => {
    const privateIPHead = NormalStateTest().getByTestId("privateIPHead");
    expect(privateIPHead).toBeInTheDocument();
  });
});

describe("EC2 serch input event test", () => {
  it("test search EC2 input event", () => {
    const value = "somevalue";
    fireEvent.change(searchEC2Input, { target: { value } });
    expect(searchEC2Input.value).toBe(value);
  });
});
