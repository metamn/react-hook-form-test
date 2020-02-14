import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

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

/**
 * Displays the component
 */
const LoginMUI = props => {
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
    <div className="LoginMUI">
      <h3>LoginMUI</h3>

      <form onSubmit={handleSubmit(formHandler)}>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox value="remember" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </div>
  );
};

LoginMUI.propTypes = propTypes;
LoginMUI.defaultProps = defaultProps;

export default LoginMUI;
export { propTypes as LoginMUIPropTypes, defaultProps as LoginMUIDefaultProps };
