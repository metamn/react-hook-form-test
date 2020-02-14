import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  FormCheck,
  Button
} from "react-bootstrap";

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
      required: false
    },
    password: {
      type: "password",
      name: "password",
      placeholder: "Password",
      required: false
    }
  }
};

/**
 * Displays the component
 */
const LoginBootstrap = props => {
  const { fields } = props;
  const { username, password } = fields;

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
    <div className="LoginBootstrap">
      <h3>LoginBootstrap</h3>

      <form onSubmit={handleSubmit(formHandler)}>
        <FormGroup controlId="username">
          <FormLabel>Username</FormLabel>
          <FormControl type="text" placeholder="Username" />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup controlId="remember">
          <FormCheck type="checkbox" label="Remember me" />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

LoginBootstrap.propTypes = propTypes;
LoginBootstrap.defaultProps = defaultProps;

export default LoginBootstrap;
export {
  propTypes as LoginBootstrapPropTypes,
  defaultProps as LoginBootstrapDefaultProps
};
