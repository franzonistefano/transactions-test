import {LoadingState} from '../../interface/common/LoadingState'
import { END_LOADING, INIT_LOADING } from '../type/loading'

const defaultState: LoadingState = {
    loading: false,
    id: 'app.all.pages.loading',
    counter: 0
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case INIT_LOADING:
            return {
                ...state,
                loading: true,
                counter: action.loading.counter,
                id: action.loading.id !== null ? action.loading.id : 'app.all.pages.loading'
            }

        case END_LOADING:
            return {
                ...state,
                loading: false,
                counter: action.loading.counter,
            }

        default:
            return state
    }
}