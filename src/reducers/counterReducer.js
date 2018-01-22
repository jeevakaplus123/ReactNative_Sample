
const INITIAL_STATE = {
  value: 0
 
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER_BY_ONE':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DECREMENT_COUNTER_BY_ONE':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'SET_COUNTER_VALUE':
      return {
        ...state,
        value: parseInt(action.payload),
      };
    default:
      return state;
    }

};
