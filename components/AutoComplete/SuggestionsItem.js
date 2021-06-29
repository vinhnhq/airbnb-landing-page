import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";

import styles from "../../styles/AutoComplete.module.scss";

const SuggestionsItem = ({ value, isFocused, onSelect }) => {
  const className = isFocused ? styles.focusSuggestion : null;

  const onSelectHandler = useCallback(() => onSelect(value), [onSelect, value]);

  return (
    <li value={value} onClick={onSelectHandler} className={className}>
      {value}
    </li>
  );
};

SuggestionsItem.propTypes = {
  value: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default memo(SuggestionsItem);
