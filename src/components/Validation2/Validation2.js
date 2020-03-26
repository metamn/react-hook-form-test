import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import * as yup from "yup";
import { useForm } from "react-hook-form";

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
const Validation2 = props => {
  const { languages, defaultLanguage } = props;
  const { code } = defaultLanguage;

  const classes = useStyles();

  /**
   * Manages the form and the validations
   */
  yup.setLocale({
    number: "It must be a number"
  });

  const validationSchema = yup.object().shape({
    language: yup.number()
  });

  const { errors, register, triggerValidation } = useForm({
    validationSchema
  });

  /**
   * Manages the state of the select
   */
  const [selected, setSelected] = useState(code);

  const selectHandler = event => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    triggerValidation("language");
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
    <div className="Validation2">
      <p>Validation2</p>
      <FormControl className={classes.formControl} error={errors.language}>
        <TextField
          name="language"
          select
          id="LanguageSelectorSelect"
          value={selected}
          onChange={selectHandler}
          inputRef={register}
        >
          {items}
        </TextField>
        {errors.language && errors.language.message && (
          <FormHelperText>{errors.language.message}</FormHelperText>
        )}
      </FormControl>
      <p>
        <button onClick={() => triggerValidation("language")}>Validate</button>
      </p>
      <p>Selected: {selected}</p>
      <p>Errors: {JSON.stringify(errors)}</p>
    </div>
  );
};

Validation2.propTypes = propTypes;
Validation2.defaultProps = defaultProps;

export default Validation2;
export {
  propTypes as Validation2PropTypes,
  defaultProps as Validation2DefaultProps
};
