import { 
    SEND_ECHO_PENDING,
    SEND_ECHO_SUCCESS,
    SEND_ECHO_ERROR 
} from '../actions/types';

export default (state = {
    text: ''
}, action) => {
    switch(action.type) {
        case SEND_ECHO_PENDING:
            return {
                text: state,
                loading: true,
                error: null
            }
        case SEND_ECHO_SUCCESS: 
            return {
                text: action.payload,
                loading: false,
                error: null
            }
        case SEND_ECHO_ERROR: 
            return {
                text: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}