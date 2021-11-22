import React, {FC} from 'react'
import LoginForm from "../components/LoginForm"
import {Row} from "antd"

const Login: FC = () => {

    return (
        <Row
            justify="center"
            align="middle"
            className="main"
        >
            <LoginForm />
        </Row>
    )
}

export default Login