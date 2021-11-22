import {combineReducers} from "redux"
import {authReducer} from "./authReducer"
import {eventReducer} from "./eventReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>