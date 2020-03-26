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
const Validation1b = props => {
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
        <TextField name="input" inputRef={register} />
      </p>
      <p>
        <button onClick={() => triggerValidation("input")}>Validate</button>
      </p>
      <p>Errors: {JSON.stringify(errors)}</p>
    </div>
  );
};

Validation1b.propTypes = propTypes;
Validation1b.defaultProps = defaultProps;

export default Validation1b;
export {
  propTypes as Validation1bPropTypes,
  defaultProps as Validation1bDefaultProps
};
