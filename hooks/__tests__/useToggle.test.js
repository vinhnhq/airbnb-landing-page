import { renderHook, act } from "@testing-library/react-hooks";

import useToggle from "../useToggle";

describe("hooks --> useToggle", () => {
  const { result } = renderHook(() => useToggle({ defaultVisibility: true }));

  test("functionality", () => {
    expect(result.current.toggle).toBeDefined();
    expect(result.current.setOn).toBeDefined();
    expect(result.current.setOff).toBeDefined();
    expect(result.current.setLoading).toBeDefined();
    expect(result.current.setLoaded).toBeDefined();

    expect(result.current.visibility).toBe(true);
    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.visibility).toBe(false);
    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.setOff();
    });

    expect(result.current.visibility).toBe(false);
    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.setOn();
    });

    expect(result.current.visibility).toBe(true);
    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.setLoading();
    });

    expect(result.current.visibility).toBe(true);
    expect(result.current.loading).toBe(true);

    act(() => {
      result.current.setLoaded();
    });

    expect(result.current.visibility).toBe(true);
    expect(result.current.loading).toBe(false);
  });
});
