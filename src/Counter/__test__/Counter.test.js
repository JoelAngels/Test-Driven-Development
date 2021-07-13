import React from "react";
import Counter from "../Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const { getByTestId } = render(<Counter />);
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("My Counter");
});

test("counter initially starts with test of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
});

test("initial value that starts with 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");
});

test("add buttons renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-btn");

  expect(addButton.textContent).toBe("+");
});

test("subtract buttons renders with -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtract-btn");

  expect(subtractButton.textContent).toBe("-");
});
