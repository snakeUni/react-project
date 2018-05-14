import { createStore, combineReducers, applyMiddleware } from 'redux'
import {getRecordReducer, wrappedReduer} from './reducer'
import thunk from 'redux-thunk'

let store = createStore(
    combineReducers({timo: getRecordReducer, timo1: wrappedReduer()}),
    applyMiddleware(thunk)
)

export default store
