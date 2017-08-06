import axios from 'axios'

const API_KEY = 'dd1b2d38b90e7e1467893c3c9592515b'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const BASE_DAY_URL = `https://min-api.cryptocompare.com/data/histominute?&tsym=EUR&fsym=`
const BASE_WEEK_URL = `https://min-api.cryptocompare.com/data/histohour?&tsym=EUR`

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_HOUR = 'FETCH_HOUR'
export const FETCH_MINUTE = 'FETCH_MINUTE'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`

    //promise returned
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function HourlyData(coin) {
    const url = `${BASE_WEEK_URL}&limit=730&fsym=${coin}`

    return DataCall(url, FETCH_HOUR)
}

export function MinuteData(coin) {
    const url = `${BASE_DAY_URL}${coin}`

    return DataCall(url, FETCH_MINUTE)
}

function DataCall(url, type) {
    const request = axios.get(url)

    return {
        type: type,
        payload: request
    }
}