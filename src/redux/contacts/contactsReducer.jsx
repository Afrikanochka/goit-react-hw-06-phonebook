import { combineReducers, createReducer } from "@reduxjs/toolkit";
import action from './contactsAction';

const contacts = createReducer([], {
    [action.addContact]: (state, action) => [action.payload, ...state],
    [action.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [action.storageContact]: (state, action) => action.payload,
});

const filter = createReducer('', {
    [action.filter]: (_, action) => action.payload,
  });
  
  export default combineReducers({
    contacts,
    filter,
  });