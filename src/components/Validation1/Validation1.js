import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import * as yup from "yup";

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
const Validation1 = props => {
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
    <div className="Validation1">
      <p>
        <input name="input" ref={register} />
      </p>
      <p>
        <button onClick={() => triggerValidation("input")}>Validate</button>
      </p>
      <p>Errors: {JSON.stringify(errors)}</p>
    </div>
  );
};

Validation1.propTypes = propTypes;
Validation1.defaultProps = defaultProps;

export default Validation1;
export {
  propTypes as Validation1PropTypes,
  defaultProps as Validation1DefaultProps
};
