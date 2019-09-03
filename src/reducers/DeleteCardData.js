import actionTypes from '../constants/action-types.js';

const {DELETE_CARD_DATA} = actionTypes;

const deleteCardData = (
    state,
    action) => {
    if (action.type === DELETE_CARD_DATA) {
        state = undefined;
    }
    return state || [];
};
export default deleteCardData;