import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=INSERT_API_KEY`;

//Action type - we store the action type in a single variable because this means we can import it into the action creator below AND the reducer (helps prevent typos and can easily be updated)
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Action creator
export function fetchWeather(city) {
    //URL that we will make a get request with for weather data - uses the below format of link + API KEY + city + country code, see documentaton on website for more details
    const url =`${ROOT_URL}&q=${city},us`;
    //Performs a get request - uses Axios to make an Ajax request (for weather data) to our url (the OpenWeatherMap back end API) this will return a promise (similar to JQuery Ajax requests)
    const request = axios.get(url);
    
    //Action
    return {
        type: FETCH_WEATHER,
        //Returns the payload - returns the promise from the Axios get request
        payload: request
    };
}

