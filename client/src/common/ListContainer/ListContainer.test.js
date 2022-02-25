import { render } from "../../test-utils";
import ListContainer from "./ListContainer";

const NormalStateTest = () => render(<ListContainer list={[]} error={false} />);

describe("List component rendering tests", () => {
  it("check for error not rendering in no error mode", () => {
    const dontShowerror = NormalStateTest().queryByTestId("listError");
    expect(dontShowerror).not.toBeInTheDocument();
  });

  it("check for infinity scroll not rendering while no items", () => {
    const infinityScroll = NormalStateTest().queryByTestId("infinityScroll");
    expect(infinityScroll).not.toBeInTheDocument();
  });
});
