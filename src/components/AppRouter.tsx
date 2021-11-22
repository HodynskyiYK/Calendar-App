import React, {FC} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import {useTypedSelector} from "../hooks/useTypedSelector"

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <>{
            isAuth ? (
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            ) : (
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            )
        }</>
    )
}

export default AppRouter