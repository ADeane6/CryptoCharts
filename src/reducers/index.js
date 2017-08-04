import { combineReducers } from 'redux';

//reducers
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
