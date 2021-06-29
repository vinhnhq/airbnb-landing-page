import React, { useRef } from "react";
import { fireEvent, render } from "@testing-library/react";

import useOnClickOutside from "../useOnClickOutside";

describe("hooks --> useOnClickOutside", () => {
  const mockFn = jest.fn();

  const TestComponent = () => {
    const ref = useRef(null);
    useOnClickOutside(ref, mockFn);
    return <div ref={ref} data-testid="1" />;
  };

  test("should react on click outside and call callback", () => {
    const { container, getByTestId, unmount } = render(<TestComponent />);

    const firstEl = getByTestId("1");
    expect(firstEl).toBeDefined();

    fireEvent.mouseDown(container);
    expect(mockFn).toBeCalledTimes(1);

    unmount();
    fireEvent.mouseDown(container);
  });
});
