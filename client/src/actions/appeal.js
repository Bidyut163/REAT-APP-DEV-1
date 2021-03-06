import axios from 'axios';
import { APPEAL_ERROR, GET_APPEALS, CREATE_APPEAL } from './types';

// Get List of Appeals
export const getAppeals = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/receptionist/appeals');

        dispatch({
            type: GET_APPEALS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Create an appeal
export const createAppeal = (formData, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const res = await axios.post(
            '/api/appellants/appeal/new',
            formData,
            config
        );
        dispatch({
            type: CREATE_APPEAL,
            payload: res.data,
        });
        history.push('/appellant/submitted');
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
