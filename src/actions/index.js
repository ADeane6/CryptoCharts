import axios from 'axios'

const API_KEY = 'dd1b2d38b90e7e1467893c3c9592515b'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`

    //promise returned
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}