import { Api } from '../Api'

export class TestApi {
    static BASE_ENDP: string = '/user'

    static GetPosts = () => {
        return Api.Get(TestApi.BASE_ENDP)
    }
}