import * as actionTypes from './action-types'

export const rootReducer = (state, action) => {
  console.log('IN REDUCER', action);

  switch (action.type) {
    case actionTypes.CHANGE_MESSAGE:
      return {
        ...state,
        contextMessageTest: 'Message Changed',
      };
    case actionTypes.UPDATE_MESSAGE:
      return {
        ...state, 
        contextMessageTest: action.payload
      }
    default:
      return state;
  }
};
