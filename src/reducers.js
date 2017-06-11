import { combineReducers } from 'redux';
import exampleReducer from './modules/Example/reducers';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
