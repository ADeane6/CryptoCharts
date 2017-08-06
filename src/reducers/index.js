import { combineReducers } from 'redux';

//reducers
import PriceReducer from './reducer_price'

const rootReducer = combineReducers({
  price: PriceReducer
});

export default rootReducer;
