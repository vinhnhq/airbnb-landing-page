import React from "react";
import PropTypes from "prop-types";

import styles from "../../styles/AutoComplete.module.scss";

import SuggestionsItem from "./SuggestionsItem";

export default function SuggestionsList({
  items,
  getItemValue,
  onSelect,
  currFocusIdx,
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={styles.suggestions} aria-label="countries">
      {items.map((item, index) => {
        const renderedValue = getItemValue(item);
        const isFocused = index === currFocusIdx;

        return (
          <SuggestionsItem
            key={index}
            value={renderedValue}
            isFocused={isFocused}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  );
}

SuggestionsList.propTypes = {
  items: PropTypes.array.isRequired,
  currFocusIdx: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  getItemValue: PropTypes.func.isRequired,
};
