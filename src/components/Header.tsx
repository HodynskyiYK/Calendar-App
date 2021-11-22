import React from 'react'
import {Layout, Menu, Row} from 'antd'
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useAction} from "../hooks/useAction"

const Header = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useAction()

    return (
        <Layout.Header>
            <Row
                justify="end"
            >{
                isAuth ? (
                    <>
                        <div style={{color: 'white', marginRight: '1rem'}}>{user.username}</div>
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            selectable={false}
                        >
                            <Menu.Item
                                key="mail"
                                onClick={logout}
                            >
                                Logout
                            </Menu.Item>
                        </Menu>
                    </>
                ) : (
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        selectable={false}
                    >
                        <Menu.Item key="mail">
                            ~Login~
                        </Menu.Item>
                    </Menu>
                )
            }</Row>
        </Layout.Header>
    )
}

export default Header