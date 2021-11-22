import {IUser} from "./authTypes"

export enum EventActionsTypes {
    SET_EVENT = 'SET_EVENT',
    SET_ERROR = 'SET_ERROR',
    SET_GUESTS = 'SET_GUESTS',
    SET_LOADING = 'SET_LOADING',
}

interface ISetEvent {
    type: EventActionsTypes.SET_EVENT,
    payload: IEvent[]
}

interface ISetGuests {
    type: EventActionsTypes.SET_GUESTS,
    payload: IUser[]
}

interface ISetError {
    type: EventActionsTypes.SET_ERROR,
    payload: string
}

interface ISetLoading {
    type: EventActionsTypes.SET_LOADING,
    payload: boolean
}

export type IEventActions = ISetEvent | ISetGuests | ISetError | ISetLoading

export interface IEvent {
    id: number,
    title: string,
    date: string,
    guest: string
}

export interface IEventState {
    events: IEvent[],
    guests: IUser[],
    isLoading: boolean,
    error: null | string
}