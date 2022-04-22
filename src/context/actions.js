import * as actionTypes from './action-types';

export const changeMessage = () => {
  return { type: actionTypes.CHANGE_MESSAGE };
};

export const updateMessage = (message) => {
  return { 
    type : actionTypes.UPDATE_MESSAGE,
    payload: message
  }
}