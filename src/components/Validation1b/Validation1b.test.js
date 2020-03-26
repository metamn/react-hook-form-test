import React from "react";
import { render } from "@testing-library/react";
import Validation1b from "./Validation1b";

it("has a Validation1b component", () => {
  const { getByText } = render(<Validation1b />);
  expect(getByText("Validation1b")).toBeInTheDocument();
});
