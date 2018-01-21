import { SUCCESS, FAIL, LOADING, MODELHIDE } from "../actions/types";

const INITIAL_STATE = {
  data: null,
  error: "",
 
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        data: action.payload,
       
      };
    case FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      
      };
      default:
      return state;
    }

};
