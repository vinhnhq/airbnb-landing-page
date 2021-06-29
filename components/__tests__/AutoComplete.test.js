import React from "react";
import { render, cleanup } from "@testing-library/react";

import AutoComplete from "../AutoComplete";

afterEach(cleanup);

describe("components --> AutoComplete", () => {
  const mockProps = {
    items: [
      { country: "Vietnam" },
      { country: "Singapore" },
      { country: "Thailand" },
      { country: "Malaysia" },
      { country: "Korean" },
    ],
    getItemValue: (item) => item.country,
    value: "",
    onChange: () => {},
    onSelect: () => {},
  };

  test("functionality", async () => {
    const { getByTestId } = render(<AutoComplete {...mockProps} />);

    const input = getByTestId("auto-complete-input");

    input.focus();
    expect(input).toHaveFocus();
  });
});
