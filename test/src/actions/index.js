import axios from "axios";
import { SEND_ECHO_PENDING, SEND_ECHO_SUCCESS, SEND_ECHO_ERROR } from './types';
import { BASE_URL } from '../utils/constants';

export const sendEchoText = text => async dispatch => {
    try {
        dispatch({
            type: SEND_ECHO_PENDING
        });
        const response  = await axios.get(`${BASE_URL}/echo?text=${text}`);
        if(!response.status === 200) throw new Error('Bad request to the /echo endpoint');
        return dispatch({
            type: SEND_ECHO_SUCCESS,
            payload: {status: response.status, data: response.data.text}
        });
    } catch (error) {
        return dispatch({
            type: SEND_ECHO_ERROR,
            payload: error
        });
    }
}