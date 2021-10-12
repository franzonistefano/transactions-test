import { SW_INIT, SW_UPDATE } from '../type/service-worker'
import ServiceWorkerState from '../../interface/common/ServiceWorkerState'

const initalState:ServiceWorkerState = {
    serviceWorkerInitialized: false,
    serviceWorkerUpdated: false,
    serviceWorkerRegistration: null,
}

export default (state = initalState, action: any) => {
    switch (action.type) {
        case SW_INIT:
            return {
                ...state,
                serviceWorkerInitialized: !state.serviceWorkerInitialized,
            };
        case SW_UPDATE:
            return {
                ...state,
                serviceWorkerUpdated: !state.serviceWorkerUpdated,
                serviceWorkerRegistration: action.payload,
            };
        default:
            return state;
    }
};
