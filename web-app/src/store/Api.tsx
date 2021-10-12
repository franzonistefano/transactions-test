import _ from "lodash"
import { RouteList } from "../configurations/RouteList"
import { FirebaseAction } from '../configurations/FirebaseAction'
import log from "loglevel"
import { ApiHeadersState } from "../interface/common/ApiHeaderState"
import { loadState } from "./localStorage"
import { AUTH_STORAGE } from "./type/localStorage"

export const HTTP_STATUS: any = {
    UNAUTHORIZED: 401,
    OK: 200
}

export const Api = {

    call: async (method: string, path: string, params?: any, queryParams?: any) => {

        let headers: ApiHeadersState = {
            'Accept': 'text/plain, application/json',
            'Authorization': '',
            'Origin': '*',
        }
        let queryString: string = "&"

        if (_.includes(_.map(_.filter(RouteList, ['_private', false]), 'path'), path)) {
            let token: string | undefined = ""
            let auth: string | undefined = loadState(AUTH_STORAGE)
            log.debug("USER:", auth)
            if (auth) {
                if (await FirebaseAction.isTokenAlive()) {
                    token = loadState(AUTH_STORAGE)
                    log.debug("TOKEN:", token)
                }
            }
            headers['Authorization'] = 'Bearer ' + token;
        };

        if (params)
            headers['Content-type'] = 'application/json'

        let request: any = {
            method: method,
            headers: headers,
        }

        if (params) {
            request.body = JSON.stringify(params)
        }

        if (queryParams) {
            queryString = Object.keys(queryParams).map((key: any) => key + '=' + queryParams[key]).join('&');
        } else {
            queryString = ""
        }

        log.debug(headers)

        return fetch(
            //`${process.env.REACT_APP_API_ROOTURL}${path}${Api.appKey}${queryString}`,
            `${process.env.REACT_APP_API_ROOTURL}${path}${queryString}`,
            request
        )
            .then(res => {
                return res
            })
            .catch(err => {
                throw err
            })
    },
    Post: (path: string, params: any) => {
        return Api.call('POST', path, params)
    },
    Put: (path: string, params: any) => {
        return Api.call('PUT', path, params)
    },
    Delete: (path: string, params: any) => {
        return Api.call('DELETE', path, params)
    },
    Get: (path: string, params?: any) => {
        return Api.call('GET', path, params)
    },
    IsAuthorized: (response: any) => {
        return new Promise((resolve: any, reject: any) => {
            if (response.status === HTTP_STATUS.UNAUTHORIZED) {
                response.text()
                    .then((text: string) => {
                        if (text.toLowerCase().includes('jwt')) {
                            text = 'Session expired'
                        }
                        reject(text)
                    })
            } else {
                response.text()
                    .then((text: string) => {
                        resolve(text)
                    })
            }
        })

    }
}