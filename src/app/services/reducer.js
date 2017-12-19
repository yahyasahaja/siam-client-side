//MODULES
import { combineReducers } from 'redux'

//ACTIONS
import { 
    UPDATE_SELECTED,
    LOGIN
} from './actions'

//REDUCER
const selectedReducer = (state = {}, action) => {
    if (action.type == UPDATE_SELECTED) {
        return { ...state, [action.id]: action.selected }
    } else {
        return state
    }
}

const loginTokenReducer = (state = null, action) => {
    if (action.type = LOGIN) {
        return { token: action.token }
    } else return state
}

//COMBINED
export default combineReducers({
    selected: selectedReducer,
    loginToken: loginTokenReducer,
})

//INI ADALAH STATE