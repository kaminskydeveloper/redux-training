import { combineReducers } from 'redux';
import { contacts } from './contacts';
import { label } from './label';

export default combineReducers({
  contacts,
  label,
});
