import React from "react";
import { render } from "@testing-library/react";
import Validation1a from "./Validation1a";

it("has a Validation1a component", () => {
  const { getByText } = render(<Validation1a />);
  expect(getByText("Validation1a")).toBeInTheDocument();
});
