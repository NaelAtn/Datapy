import {combineReducers} from 'redux' ; 
import messageReducer from './message'
import inscriReducer from './inscri'

const rootReducer = combineReducers({messageReducer , inscriReducer})

export default rootReducer ;