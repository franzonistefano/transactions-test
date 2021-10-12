
import Firebase from "firebase";
import { loadState } from "../store/localStorage";
import { AUTH_STORAGE } from "../store/type/localStorage";
import log from "./LogLevel";

export const FirebaseAction = {

    firebaseConfig: {
        apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
        // databaseURL: process.env.REACT_APP_FIREBASE_DB,
        // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
        // storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
        // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
        // appId: process.env.REACT_APP_FIREBASE_APPID,
        // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
    },

    startInizialize: () => {
        Firebase.initializeApp(FirebaseAction.firebaseConfig);
        // Firebase.analytics();
        // const GoogleProvider = new Firebase.auth.GoogleAuthProvider();
        // GoogleProvider.setCustomParameters({ prompt: "select_account" });
        // const MicrosoftProvider = new Firebase.auth.OAuthProvider('microsoft.com')
        // MicrosoftProvider.setCustomParameters({ prompt: "select_account" });
    },

    startSignIn: (email: string, password: string) => {
        return Firebase.auth()
            .signInWithEmailAndPassword(email, password)
    },

    /**
     * signOut the current user
     */
    startSignOut: () => {
        return Firebase.auth()
            .signOut()
    },

    /**
     * Set the Authentication state persists in Firebase JS SDK
     */
    startSetPersistent: () => {
        return Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
    },


    getCurrentUserToken: async () => {
        let token = ''
        log.debug(Firebase.auth().currentUser)
        await Firebase.auth().currentUser?.getIdToken()
            .then((idTokenResult: any) => {
                token = idTokenResult
            })
            .catch((error) => {
                log.error("getCurrentUserToken: ", error)
            })
        return token
    },

    getUserToken: async (auth: Firebase.User) => {
        let token = ''
        await auth.getIdToken()
            .then((idTokenResult: any) => {
                token = idTokenResult
            })
        return token
    },

    getCurrentUser: async() => {
        return await Firebase.auth().currentUser;
    },

    isTokenAlive: async () => {

        const _MS_PER_MIN = 1000 * 60;
        const _MS_PER_HOUR = 1000 * 60 * 60;
        const _MS_PER_DAY = 1000 * 60 * 60 * 24

        let diff: number = 0;
        let alive: boolean = true;

        /***  OLD TOKEN ***/
        await Firebase.auth().currentUser?.getIdTokenResult()
            .then((idTokenResult: any) => {

                let signInDateTime = new Date(idTokenResult.authTime);
                let currentDateTime = new Date();

                diff = (currentDateTime.getTime() - signInDateTime.getTime()) / _MS_PER_MIN
            })
            .finally(() => {
                // TOKEN_EXPIRATION_LIMIT
                if (diff > 60) {
                    alive = false;
                }

            })
            .catch((error: any) => {
                console.log("[----- Alive Token Error -----] ", error)
            })


        /***  NEW TOKEN ***/
        Firebase.auth().currentUser?.getIdTokenResult(true)
            .then((idTokenResult: any) => {

                let auth: any = loadState(AUTH_STORAGE)
                if (auth) {
                    auth = JSON.parse(auth)
                    auth.access_token = idTokenResult.token
                }
                localStorage.setItem(AUTH_STORAGE, JSON.stringify(auth))

            })
            .catch((error: any) => {
                console.log("[----- Alive Token Error -----] ", error)
            })

        return alive;
    },

    initStateToken: async () => {
        await Firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                log.debug(user)
                await user
                    .getIdToken()
                    .then((token: any) => {
                        log.debug("FIREBASE TOKEN", token);
                        return token
                    })
            } else {
                return ''

            }
        })
    }

}
