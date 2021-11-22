import React, {FC, useState} from 'react'
import {Alert, Button, Card, Form, Input} from "antd"
import {useAction} from "../hooks/useAction"
import {useTypedSelector} from "../hooks/useTypedSelector"

const LoginForm: FC = () => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [form] = Form.useForm()
    const {isLoading, error} = useTypedSelector(state => state.auth)
    const {login} = useAction()

    const formHandler = () => {
        login(username, pass)
        form.resetFields()
    }

    return (
        <Card>
            <Form
                form={form}
                onFinish={formHandler}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        value={pass}
                        onChange={event => setPass(event.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Enter
                    </Button>
                </Form.Item>
            </Form>
            {
                error && <Alert message={error} type="error" />
            }
        </Card>
    )
}

export default LoginForm