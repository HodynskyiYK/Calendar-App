import React, {FC, useEffect} from 'react'
import {Layout} from 'antd'
import Header from "./components/Header"
import AppRouter from "./components/AppRouter"
import {useAction} from "./hooks/useAction"

const App: FC = () => {
    const {setAuth, setUser} = useAction()

    useEffect(() => {
        const user = localStorage.getItem('user')
        const isAuth = localStorage.getItem('isAuth')
        if (user && isAuth) {
            setAuth(JSON.parse(isAuth))
            setUser(JSON.parse(user))
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <Header />
            <AppRouter />
        </Layout>
    )
}

export default App