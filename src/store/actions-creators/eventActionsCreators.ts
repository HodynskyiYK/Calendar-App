import {EventActionsTypes, IEvent, IEventActions} from "../actions-types/eventTypes"
import {AppDispatch} from "../index"
import {IUser} from "../actions-types/authTypes"

export const EventActionsCreators = {
    setLoading: (loading: boolean): IEventActions => ({ type: EventActionsTypes.SET_LOADING, payload: loading }),
    setEvents: (events: IEvent[]): IEventActions => ({ type: EventActionsTypes.SET_EVENT, payload: events }),
    setError: (error: string): IEventActions => ({ type: EventActionsTypes.SET_ERROR, payload: error }),
    setGuests: (guests: IUser[]): IEventActions => ({ type: EventActionsTypes.SET_GUESTS, payload: guests }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        dispatch(EventActionsCreators.setLoading(true))
        try {
            setTimeout(async () => {
                const response = await fetch('./user.json')
                const result = await response.json()
                dispatch(EventActionsCreators.setGuests(result))
            }, 1000)
        } catch (err) {
            dispatch(EventActionsCreators.setError('Some error!'))
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        dispatch(EventActionsCreators.setLoading(true))
        try {
            setTimeout(async () => {
                const events = localStorage.getItem('events') || '[]'
                const json = JSON.parse(events) as IEvent[]
                json.push(event)
                dispatch(EventActionsCreators.setEvents(json))
                localStorage.setItem('events', JSON.stringify(json))
            }, 1000)
        } catch (err) {
            dispatch(EventActionsCreators.setError('Some error!'))
        }
    },
    fetchEvents: () => async (dispatch: AppDispatch) => {
        dispatch(EventActionsCreators.setLoading(true))
        try {
            setTimeout(async () => {
                const events = localStorage.getItem('events')
                if (events) {
                    const json = JSON.parse(events)
                    dispatch(EventActionsCreators.setEvents(JSON.parse(json)))
                } else {
                    dispatch(EventActionsCreators.setEvents([] as IEvent[]))
                }
            }, 1000)
        } catch (err) {
            dispatch(EventActionsCreators.setError('Some error!'))
        }
    }
}