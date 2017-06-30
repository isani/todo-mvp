import { combineReducers } from 'redux'
import draft from './draft'
import todos from './todos'

const combinedReducers = combineReducers({ draft, todos })

export default combinedReducers
