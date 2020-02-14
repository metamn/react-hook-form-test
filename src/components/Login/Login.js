import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {
  fields: {
    username: {
      type: "text",
      name: "username",
      placeholder: "Username",
      validation: yup.string().required()
    }
  }
};

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
  /**
   * This can be generated from props
   */
  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: validationSchema
  });

  const formHandler = data => console.log("Data:", data);
  console.log("Errors:", errors);

  return (
    <div className="Login">
      <h3>Login</h3>

      <form onSubmit={handleSubmit(formHandler)}>
        <Input className="Input">
          <label className="Label">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register}
          />
          {errors.username && (
            <ul className="Messages">
              <li>{errors.username.message}</li>
            </ul>
          )}
        </Input>
        <Input className="Input">
          <label className="Label">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register}
          />
          {errors.password && (
            <ul className="Messages">
              <li>{errors.password.message}</li>
            </ul>
          )}
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
