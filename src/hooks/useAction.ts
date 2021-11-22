import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {AllActionCreators} from "../store/actions-creators"

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AllActionCreators, dispatch)
}