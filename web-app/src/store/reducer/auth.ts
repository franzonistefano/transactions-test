import { LOGGED_IN, LOGGED_OUT } from '../type/auth';
import { AUTH_STORAGE } from '../type/localStorage';
import { loadState } from '../localStorage';

const persistedData = loadState(AUTH_STORAGE);
let defaultState: any = persistedData === null
    ? {
        state: "LOGGEDOUT",
        isUserAuthenticated: false,
        auth: persistedData,
        loading: false
    }
    : {
        state: "LOGGEDIN",
        isUserAuthenticated: true,
        auth: persistedData,
        loading: false
    };

export default (state = defaultState, action: any) => {
    switch (action.type) {

        case LOGGED_IN:
            return {
                ...state,
                state: "LOGGEDIN",
                isUserAuthenticated: true,
                auth: action.auth,
                loading: false
            }

        case LOGGED_OUT:
            return {
                auth: "",
                state: "LOGGEDOUT",
                loading: false,
                isUserAuthenticated: false,
            };

        default:
            return state
    }
}