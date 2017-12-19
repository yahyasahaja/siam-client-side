//MODULES
import axios from 'axios'
//import { endpointURL } from 'config'

//TYPES
export const UPDATE_SELECTED = 'updateSelected'
export const LOGIN = 'login'

//CONFIG
import { TOKEN_URI } from '../config'

//ACTIONS
export const updateSelected = (id, selected) => ({ type: UPDATE_SELECTED, id, selected })
export const login = token => {
    localStorage.setItem(TOKEN_URI, token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return {type: LOGIN, token}
}