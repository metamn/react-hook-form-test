import React from "react";
import { render } from "@testing-library/react";
import Validation1 from "./Validation1";

it("has a Validation1 component", () => {
  const { getByText } = render(<Validation1 />);
  expect(getByText("Validation1")).toBeInTheDocument();
});
