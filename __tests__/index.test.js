import React from "react";
import { render } from "@testing-library/react";

import Index from "../pages/index";

describe("pages --> Index", () => {
  test("should render correctly", () => {
    const { getByText } = render(<Index />);
    const firstLinkElement = getByText(/Become a Host/);
    expect(firstLinkElement).toBeInTheDocument();
  });
});
