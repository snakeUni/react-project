import { createStore, combineReducers, applyMiddleware } from 'redux'
import {records, user} from './reducer'
import thunk from 'redux-thunk'

let store = createStore(
    combineReducers({records, user}),
    applyMiddleware(thunk)
)

export default store
