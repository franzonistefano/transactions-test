import React from 'react';
import { Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { RouteList } from '../configurations/RouteList';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = (props: any) => {
    return (
        <Router history={history}>
            <Switch>            
                {RouteList.map((route:any, i:any) => {
                    if(route._private)
                        return <PrivateRoute key={i} {...route}/>
                    
                    return <PublicRoute key={i} {...route} />
                })}
            </Switch>
        </Router>
    )

}

export default AppRouter;