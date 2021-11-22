import {AuthActionsCreators} from './authActionsCreators'
import {EventActionsCreators} from './eventActionsCreators'

export const AllActionCreators = {
    ...AuthActionsCreators,
    ...EventActionsCreators
}