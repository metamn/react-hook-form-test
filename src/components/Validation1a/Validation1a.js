import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import TextField from "@material-ui/core/TextField";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Validation1a = props => {
  yup.setLocale({
    number: "It must be a number"
  });

  const validationSchema = yup.object().shape({
    input: yup.number().required()
  });

  const { errors, register, triggerValidation } = useForm({
    validationSchema
  });

  return (
    <div className="Validation1a">
      <p>
        <TextField name="input" ref={register} />
      </p>
      <p>
        <button onClick={() => triggerValidation("input")}>Validate</button>
      </p>
      <p>Errors: {JSON.stringify(errors)}</p>
    </div>
  );
};

Validation1a.propTypes = propTypes;
Validation1a.defaultProps = defaultProps;

export default Validation1a;
export {
  propTypes as Validation1aPropTypes,
  defaultProps as Validation1aDefaultProps
};
