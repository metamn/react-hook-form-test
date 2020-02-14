import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

const Input = styled("div")(() => ({
  marginBottom: "1em",
  "& .Label": {
    display: "flex"
  }
}));

/**
 * Displays the component
 */
const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="Login">
      <h3>Login</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input className="Input">
          <label className="Label">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register}
          />
        </Input>
        <Input className="Input">
          <label className="Label">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register}
          />
        </Input>
        <Input className="Input">
          <label>Remember me</label>
          <input
            type="checkbox"
            placeholder="Remember Me"
            name="Remember Me"
            ref={register}
          />
        </Input>
        <Input className="Input">
          <input type="submit" />
        </Input>
      </form>
    </div>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
export { propTypes as LoginPropTypes, defaultProps as LoginDefaultProps };
