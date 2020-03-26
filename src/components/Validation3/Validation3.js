import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import shortid from "shortid";
import * as yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

/**
 * Defines the Language prop type
 */
const languagePropType = PropTypes.shape({
  name: PropTypes.string,
  code: PropTypes.string
});

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * See https://en.wikipedia.org/wiki/Language_localisation
   */
  languages: PropTypes.arrayOf(languagePropType),
  defaultLanguage: languagePropType
};

/**
 * Defines the default props
 */
const defaultProps = {
  languages: [
    { name: "English", code: "en-GB" },
    { name: "Dutch NL", code: "nl-NL" },
    { name: "Dutch BE", code: "nl-BE" }
  ],
  defaultLanguage: { name: "English", code: "en-GB" }
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    width: "100%"
  }
}));

/**
 * Displays the component
 */
const Validation3 = props => {
  const { languages, defaultLanguage } = props;
  const { code } = defaultLanguage;

  const classes = useStyles();

  /**
   * Manages the validations
   */
  yup.setLocale({
    number: "It must be a number"
  });

  const validationSchema = yup.object().shape({
    input: yup.number()
  });

  const validateSchema = data =>
    validationSchema.validate(data).catch(function(err) {
      console.log("Errors:", err.errors); // => ['Deve ser maior que 18']
    });

  /**
   * Manages the state of the select
   */
  const [selected, setSelected] = useState(code);

  const selectHandler = event => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    validateSchema({ input: selected });
  }, [selected]);

  /**
   * Prepares the items
   */
  const items = languages.map(item => {
    const { name, code } = item;
    return (
      <MenuItem key={shortid.generate()} value={code}>
        {name}
      </MenuItem>
    );
  });

  return (
    <div className="Validation3">
      <p>Validation3</p>
      <FormControl className={classes.formControl}>
        <TextField
          name="input"
          select
          value={selected}
          onChange={selectHandler}
        >
          {items}
        </TextField>
      </FormControl>
      <p>
        <button onClick={() => validateSchema({ input: selected })}>
          Validate
        </button>
      </p>
      <p>Selected: {selected}</p>
    </div>
  );
};

Validation3.propTypes = propTypes;
Validation3.defaultProps = defaultProps;

export default Validation3;
export {
  propTypes as Validation3PropTypes,
  defaultProps as Validation3DefaultProps
};
