import React from "react";
import Validation1 from "./Validation1";
import ApiDoc from "./Validation1.md";

export default {
  component: Validation1,
  title: "Validation1",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Validation1 />;
