import React, {FC, useState} from 'react'
import {Button, DatePicker, Form, Input, Select} from "antd"
import {IUser} from "../store/actions-types/authTypes"

interface IEventForm {
    guests: IUser[]
}

const EventForm: FC<IEventForm> = ({ guests }) => {
    const [titleValue, setTitleValue] = useState('')
    const [dateValue, setDateValue] = useState('')
    const [guestValue, setGuestValue] = useState('')
    const [form] = Form.useForm()

    const onChangeDate = (value: any) => {
        const chooseDate: Date = value._d
        const year = chooseDate.getFullYear()
        let month: number | string = chooseDate.getMonth()
        if (month < 10) month = `0${month}`
        let date: number | string = chooseDate.getDate()
        if (date < 10) date = `0${date}`
        setDateValue(`${year}-${month}-${date}`)
    }

    const formHandler = () => {
        console.log(titleValue);
        console.log(dateValue)
        console.log(guestValue)

        form.resetFields()
    }

    return (
        <Form
            form={form}
            onFinish={formHandler}
        >
            <Form.Item
                label="Event title"
                name="event_title"
                rules={[{ required: true, message: 'Please input event title!' }]}
            >
                <Input
                    value={titleValue}
                    onChange={event => setTitleValue(event.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="event_date"
                rules={[{ required: true, message: 'Please choose date!' }]}
            >
                <DatePicker
                    style={{width: '100%'}}
                    onChange={onChangeDate}
                />
            </Form.Item>
            <Form.Item
                label="Choose guest"
                name="choose_guest"
                rules={[{ required: true, message: 'Please choose guest!' }]}
            >
                <Select
                    onChange={(value: string) => setGuestValue(value)}
                >{
                    guests.map((guest, index) => (
                        <Select.Option
                            value={guest.username}
                            key={index}
                        >{guest.username}
                        </Select.Option>)
                    )
                }</Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Create event
                </Button>
            </Form.Item>
        </Form>
    )
}

export default EventForm