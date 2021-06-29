import React from "react";
import renderer from "react-test-renderer";

import Toggle from "../Toggle";

describe("components --> Toggle", () => {
  const mockProps = {
    isOn: true,
    handleToggle: () => {},
    onColor: "red",
  };

  test("should render correctly", () => {
    const tree = renderer.create(<Toggle {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
