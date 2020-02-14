import React from "react";
import LoginBootstrap from "./LoginBootstrap";
import ApiDoc from "./LoginBootstrap.md";

export default {
  component: LoginBootstrap,
  title: "LoginBootstrap",
  parameters: { notes: ApiDoc }
};

export const Default = () => <LoginBootstrap />;
