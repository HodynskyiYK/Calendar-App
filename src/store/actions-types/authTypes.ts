export enum AuthActionTypes {
    SET_AUTH = 'SET_AUTH',
    SET_LOADING = 'SET_SET_LOADING',
    SET_USER = 'SET_USER',
    SET_ERROR = 'SET_ERROR',
}

interface ISetAuthAction {
    type: AuthActionTypes.SET_AUTH,
    payload: boolean
}

interface ISetLoadingAction {
    type: AuthActionTypes.SET_LOADING,
    payload: boolean
}

interface ISetUserAction {
    type: AuthActionTypes.SET_USER,
    payload: IUser
}

interface ISetErrorAction {
    type: AuthActionTypes.SET_ERROR,
    payload: string
}

export type AuthActions = ISetAuthAction | ISetLoadingAction | ISetUserAction | ISetErrorAction

export interface IUser {
    username: string,
    password: string
}

export interface IAuthState {
    isAuth: boolean,
    isLoading: boolean,
    user: IUser,
    error: null | string
}