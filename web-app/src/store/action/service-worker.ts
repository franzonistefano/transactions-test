import {SW_INIT, SW_UPDATE} from '../type/service-worker'

export function serviceWorkerInizialized(){
    return {type: SW_INIT}
}

export function serviceWorkerUpdate(registration:any){
    return {type: SW_UPDATE, registration}
}