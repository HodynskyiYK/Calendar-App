import {AuthActions, AuthActionTypes, IUser} from "../actions-types/authTypes"
import {AppDispatch} from "../index"

export const AuthActionsCreators = {
    setUser: (user: IUser): AuthActions => ({type: AuthActionTypes.SET_USER, payload: user}),
    setLoading: (loading: boolean): AuthActions => ({type: AuthActionTypes.SET_LOADING, payload: loading}),
    setError: (error: string): AuthActions => ({type: AuthActionTypes.SET_ERROR, payload: error}),
    setAuth: (auth: boolean): AuthActions => ({type: AuthActionTypes.SET_AUTH, payload: auth}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionsCreators.setLoading(true))
            setTimeout(async () => {
                const response = await fetch('./user.json')
                const result: IUser[] = await response.json()
                const isUser = result.find((user: IUser) => user.username === username && user.password === password)
                if (isUser) {
                    const user: IUser = {
                        username,
                        password
                    }
                    localStorage.setItem('user', JSON.stringify(user))
                    localStorage.setItem('isAuth', 'true')
                    dispatch(AuthActionsCreators.setAuth(true))
                    dispatch(AuthActionsCreators.setUser(user))
                } else {
                    dispatch(AuthActionsCreators.setError('Incorrect username or password!'))
                }
            }, 1000)
        } catch (err) {
            dispatch(AuthActionsCreators.setError('Something went wrong!'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('user')
        localStorage.removeItem('isAuth')
        dispatch(AuthActionsCreators.setUser({} as IUser))
        dispatch(AuthActionsCreators.setAuth(false))
    }
}