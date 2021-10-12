import log from "loglevel";
import { LoadingStateAction } from "../../interface/common/LoadingState";
import { INIT_LOADING, END_LOADING } from "../type/loading";

export function initLoading(loading: LoadingStateAction) {
    return { type: INIT_LOADING, loading }
}

export function endLoading(loading: LoadingStateAction) {
    return { type: END_LOADING, loading }
}

export function addLoading() {
    return (dispatch: any, getState: any) => {
        let count = getState().loadingReducer.counter + 1;
        dispatch(initLoading({
            counter: count
        }));
    }
}

export function removeLoading() {
    return (dispatch: any, getState: any) => {
        log.debug(getState().loadingReducer.counter)
        let count = getState().loadingReducer.counter - 1;
        dispatch(endLoading({
            counter: count
        }));
    }
}