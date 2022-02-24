import { render } from "@testing-library/react";
import { iteratorSymbol } from "immer/dist/internal";
import Login from "./Login";

describe("Login component test", () => {
  it("render components", () => {
    const {} = render(<Login />);
  });
});
