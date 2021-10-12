import {GET_TEST} from '../type/test'
import TestState from '../../interface/common/TestState'

const defaultState:TestState = {
    userId: 0,
    id: 0,
    title: 'title',
    body: 'body'
}

export default(state = defaultState, action:any) => {
    switch(action.type) {
        case GET_TEST:
            return {
                ...state,
                test: action.test
            }

        default:
            return state
    }
}