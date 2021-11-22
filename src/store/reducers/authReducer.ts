import {AuthActions, AuthActionTypes, IAuthState, IUser} from "../actions-types/authTypes"


const initialState: IAuthState = {
    isAuth: false,
    isLoading: false,
    user: {} as IUser,
    error: null
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return {
                ...state,
                error: null,
                isLoading: false,
                isAuth: action.payload
            }
        case AuthActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case AuthActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case AuthActionTypes.SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}