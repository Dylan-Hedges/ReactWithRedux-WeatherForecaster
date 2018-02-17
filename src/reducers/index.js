import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
    //"weather" is the key used b the global/app level state
    weather: WeatherReducer
});

export default rootReducer;
