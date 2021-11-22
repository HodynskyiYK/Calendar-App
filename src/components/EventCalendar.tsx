import React, {FC} from 'react'
import {Calendar} from "antd"

const EventCalendar: FC = () => {
    const onPanelChange = () => {
        console.log('true!')
    }

    return (
        <Calendar
            onPanelChange={onPanelChange}
        />
    )
}

export default EventCalendar