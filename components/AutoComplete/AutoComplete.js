import React, { useState, useRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import { useOnClickOutside, useToggle } from "../../hooks";
import { keys } from "../../constants/common";

import styles from "../../styles/AutoComplete.module.scss";

import SuggestionsList from "./SuggestionsList";

export default function AutoComplete({
  items,
  getItemValue,
  value,
  onChange,
  onSelect,
}) {
  const ref = useRef();
  const inputRef = useRef();

  const displaySuggestions = useToggle();
  const [currFocusIdx, setCurrFocusIdx] = useState(-1);

  useOnClickOutside(ref, displaySuggestions.setOff);

  const onSelectHandler = useCallback(
    (selectedValue) => {
      onSelect(selectedValue);
      setCurrFocusIdx(-1);
      displaySuggestions.setOff();
    },
    [displaySuggestions, onSelect]
  );

  const onKeyDownHandler = useCallback(
    (e) => {
      let updatedIdx,
        len = items.length;

      switch (e.keyCode) {
        case keys.DOWN:
          if (len === 0) return;

          updatedIdx = currFocusIdx < len ? currFocusIdx + 1 : 0;
          setCurrFocusIdx(updatedIdx);
          break;

        case keys.UP:
          if (len === 0) return;

          const lastItemIdx = len - 1;
          updatedIdx = currFocusIdx >= 0 ? currFocusIdx - 1 : lastItemIdx;
          setCurrFocusIdx(updatedIdx);
          break;

        case keys.ENTER:
          if (currFocusIdx >= 0 && currFocusIdx < len) {
            const selectedValue = getItemValue(items[currFocusIdx]);
            onSelectHandler(selectedValue);
            inputRef.current.blur();
          }
          break;

        default:
          break;
      }
    },
    [currFocusIdx, getItemValue, items, onSelectHandler]
  );

  const currValue = useMemo(() => {
    if (currFocusIdx === items.length || currFocusIdx === -1) {
      return value;
    }

    return items[currFocusIdx] ? getItemValue(items[currFocusIdx]) : "";
  }, [currFocusIdx, getItemValue, items, value]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        aria-label="country-input"
        className={styles.input}
        placeholder="Try Vietnam"
        value={currValue}
        onChange={onChange}
        onKeyDown={onKeyDownHandler}
        data-testid="auto-complete-input"
        onFocus={displaySuggestions.setOn}
      />

      {displaySuggestions.visibility && (
        <SuggestionsList
          items={items}
          getItemValue={getItemValue}
          currFocusIdx={currFocusIdx}
          onSelect={onSelectHandler}
        />
      )}
    </div>
  );
}

AutoComplete.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  getItemValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
