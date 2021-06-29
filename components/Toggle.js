import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "../styles/Toggle.module.scss";

export default function Toggle({ isOn, handleToggle, onColor }) {
  return (
    <Fragment>
      <input
        id="toggle-checkbox-id"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        className={styles.input}
      />
      <label
        htmlFor="toggle-checkbox-id"
        style={{ background: isOn && onColor }}
        className={styles.label}
      >
        <span className={styles.button} />
      </label>
    </Fragment>
  );
}

Toggle.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  onColor: PropTypes.string,
};
