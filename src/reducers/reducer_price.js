import { FETCH_WEATHER, FETCH_MINUTE, FETCH_HOUR } from '../actions/index'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_MINUTE:
            console.log("MINUTE", action.payload)
            return state
        case FETCH_HOUR:
            return [ action.payload, ...state ]
    }
    return state
}