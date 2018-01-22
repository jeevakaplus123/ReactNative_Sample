export const incrementCounterByOne = () => {
    return { type: 'INCREMENT_COUNTER_BY_ONE' };
}

export const decrementCounterByOne = () => {
    return { type: 'DECREMENT_COUNTER_BY_ONE' };
}

export const setCounterValue = (val) => {
    return { type: 'SET_COUNTER_VALUE', payload: val };
}