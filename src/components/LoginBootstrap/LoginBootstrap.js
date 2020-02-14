import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

      <Form onSubmit={handleSubmit(formHandler)}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            className={errors.username ? "is-invalid" : "valid"}
            ref={register({ required: username.required })}
          />
          {errors.username && (
            <Form.Control.Feedback type="invalid">
              {errors.username.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className={errors.password ? "is-invalid" : "valid"}
            ref={register({ required: password.required })}
          />
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId="remember">
          <Form.Check
            type="checkbox"
            name="remember"
            label="Remember me"
            ref={register}
          />
        </Form.Group>
        <Button variant="primary" name="submit" type="submit" ref={register}>
          Submit
        </Button>
      </Form>
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
