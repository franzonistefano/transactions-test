export interface RouteState{
    path: string;
    component: any;
    _private: boolean;
    children: RouteState[];
    redirectTo: string;
    exact:boolean
}


