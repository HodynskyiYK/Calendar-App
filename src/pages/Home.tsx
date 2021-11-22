import React, {FC, useEffect, useState} from 'react'
import EventCalendar from "../components/EventCalendar"
import {Button, Modal, Row} from "antd"
import EventForm from "../components/EventForm"
import {useAction} from "../hooks/useAction"
import {useTypedSelector} from "../hooks/useTypedSelector"

const Home: FC = () => {
    const [visibleModal, setVisibleModal] = useState(false)
    const {fetchGuests} = useAction()
    const {guests} = useTypedSelector(state => state.events)

    useEffect(() => {
        fetchGuests()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <EventCalendar />
            <Row
                justify="center"
            >
                <Button
                    type="primary"
                    onClick={() => setVisibleModal(true)}
                >Add event</Button>
            </Row>
            <Modal
                title="New event"
                visible={visibleModal}
                footer={null}
                onCancel={() => setVisibleModal(false)}
            >
                <EventForm guests={guests} />
            </Modal>
        </>
    )
}

export default Home