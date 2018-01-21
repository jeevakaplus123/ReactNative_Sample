import { SUCCESS, FAIL, LOADING, MODELHIDE } from "../actions/types";

const INITIAL_STATE = {
  data: null,
  error: "",
  loading: false,

  modalVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        data: action.payload,
        loading: false,
        modalVisible: true
      };
    case FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
        modalVisible: false
      }

};
