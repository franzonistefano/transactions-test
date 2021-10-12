import {
    GET_TEST
} from '../type/test'
import TestState from '../../interface/common/TestState'
import { TestApi } from '../api/TestApi'

export function getTest(test: TestState[]) {
    return { type: GET_TEST, test }
}

export function startGetPosts() {
    return (dispatch: any) => {
        TestApi.GetPosts()
            .then((response: any) => {
                if (response.status === 200)
                    return response.json()
            })
            .then((json: any) =>
                dispatch(getTest(json))
            );
    }
}