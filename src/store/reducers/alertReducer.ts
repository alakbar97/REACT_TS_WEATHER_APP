import { AlertState, AlertAction, SET_ALERT } from '../types';

export const initialState: AlertState = {
    message: ''
};

export default (state = initialState, action: AlertAction): AlertState => {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                message: action.payload
            }

        default:
            return state;
    }
}