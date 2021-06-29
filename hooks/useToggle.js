import { useReducer, useEffect } from "react";

const actionTypes = {
  toggle: "TOGGLE",
  show: "SHOW",
  hide: "HIDE",
  loading: "LOADING",
  loaded: "LOADED",
};

const initialState = {
  visibility: false,
  loading: false,
};

function toggleReducer(state, action) {
  switch (action.type) {
    case actionTypes.toggle: {
      return { ...state, visibility: !state.visibility };
    }
    case actionTypes.show: {
      return { ...state, visibility: true };
    }
    case actionTypes.hide: {
      return { ...state, visibility: false };
    }
    case actionTypes.loading: {
      return { ...state, loading: true };
    }
    case actionTypes.loaded: {
      return { ...state, loading: false };
    }
  }
}

export default function useToggle({
  reducer = toggleReducer,
  defaultVisibility = false,
} = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (defaultVisibility) {
      dispatch({ type: actionTypes.show });
    }
  }, [defaultVisibility]);

  const toggle = () => dispatch({ type: actionTypes.toggle });
  const setOn = () => dispatch({ type: actionTypes.show });
  const setOff = () => dispatch({ type: actionTypes.hide });
  const setLoading = () => dispatch({ type: actionTypes.loading });
  const setLoaded = () => dispatch({ type: actionTypes.loaded });

  return { ...state, toggle, setOn, setOff, setLoading, setLoaded };
}
