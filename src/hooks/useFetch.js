import { useReducer } from "react";
import { createReview } from "../services/api";

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SUCCESS:
      return { ...state, success: true, error: null, sending: false };

    case ACTIONS.FAILURE:
      return { ...state, success: null, error: payload, sending: false };

    case ACTIONS.SENDING:
      return { ...state, success: false, error: null, sending: true };
    default:
      return state;
  }
};

const ACTIONS = {
  SENDING: "SENDING",
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
};

const INITIAL_VALUES = {
  sending: false,
  success: false,
  error: null,
};

export default function useFetch() {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_VALUES);

  const publishReview = (data) => {
    dispatch({ type: ACTIONS.SENDING });
    createReview(data)
      .then((res) => {
        dispatch({ type: ACTIONS.SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.FAILURE, payload: err });
      });
  };

  return {
    sending: state.sending,
    success: state.success,
    error: state.error,
    publishReview,
  };
}
