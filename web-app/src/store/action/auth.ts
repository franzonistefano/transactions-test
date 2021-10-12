import { FirebaseAction } from '../../configurations/FirebaseAction'
import log from "../../configurations/LogLevel";
import { LOGGED_IN, LOGGED_OUT } from '../type/auth';
import { AUTH_STORAGE } from '../type/localStorage'
import { addLoading, endLoading, initLoading, removeLoading } from './loading';

FirebaseAction.startInizialize()

export function login(token: string) {
    return { type: LOGGED_IN, auth: token }
}

export function logOut() {
    return { type: LOGGED_OUT }
}

/**
 * Login action
 * add jwt from localstorage
 */
export function startLogin(email: string, password: string, onSuccess: any) {
    log.info("-- startLogin params: --", email, password)
    return (dispatch: any, getState: any) => {
        //add counter for loading
        dispatch(addLoading())

        FirebaseAction.startSetPersistent()
            .then(() => {
                FirebaseAction.startSignIn(email, password)
                    .then((signInRes: any) => {
                        log.debug("LOGGEDIN", signInRes.user);
                        //log.debug("VERIFY EMAIL: ", signInRes.user.emailVerified);

                        // if(signInRes.user.emailVerified)
                        signInRes.user.getIdToken()
                            .then((token: any) => {
                                log.info("-- TOKEN -- ", token)
                                localStorage.setItem(AUTH_STORAGE, token)
                                dispatch(login(token))

                                //remove counter for loading
                                dispatch(removeLoading())

                                onSuccess()
                            })
                    })
                    .catch((signinErr: any) => {
                        log.error("FIREBASE signinErr", signinErr);

                        dispatch(startLogout());
                        //remove counter for loading
                        dispatch(removeLoading())
                    });
            })
            .catch((error) => {
                //remove counter for loading
                dispatch(removeLoading)
                // var errorCode = error.code;
                // var errorMessage = error.message;
            })
    }
}

/**
 * Logout action
 * delete jwt from localstorage
 */
export function startLogout() {
    return (dispatch: any, getState: any) => {
        //add counter for loading
        dispatch(addLoading())

        localStorage.clear();

        FirebaseAction.startSignOut()
            .finally(() => {
                dispatch(logOut());
                //remove counter for loading
                dispatch(removeLoading())
            });
    }
}