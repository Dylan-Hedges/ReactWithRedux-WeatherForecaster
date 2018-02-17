import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action) {
    //If the action type
    switch (action.type) {
        //Matches the below
        case FETCH_WEATHER:
            //Return the weather data for the searched city - in Redux we dont ever change our state (e.g "state.push"), instead we return a new state using ".concat" - takes the exisiting array of cities, adds the new searched for city and creates a new array that contains all previous cities weather data + the newly searched for city's weather data (always use this method), "state" contains an array of all searched for cities weather data
            return state.concat([ action.payload.data ]);
    }
        
    
    return state;
}