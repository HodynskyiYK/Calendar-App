import {EventActionsTypes, IEventActions, IEventState} from "../actions-types/eventTypes"

const initialState: IEventState = {
    events: [],
    guests: [],
    isLoading: false,
    error: null
}

export const eventReducer = (state = initialState, action: IEventActions) => {
    switch (action.type) {
        case EventActionsTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
                error: null
            }
        case EventActionsTypes.SET_GUESTS:
            return {
                ...state,
                isLoading: false,
                guests: action.payload
            }
        case EventActionsTypes.SET_EVENT:
            return {
                ...state,
                isLoading: false,
                events: action.payload
            }
        case EventActionsTypes.SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}