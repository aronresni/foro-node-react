import { combineReducers } from 'redux';
import foroReducer from './foroReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  root: foroReducer, // Puedes darle cualquier nombre que desees
  user: userReducer, // Puedes darle cualquier nombre que desees
});

export default rootReducer;
